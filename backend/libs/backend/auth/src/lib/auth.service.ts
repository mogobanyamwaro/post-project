export {
  ForgotPasswordInput,
  LoginInput,
  ResetPasswordInput,
} from '@backend/backend/dtos';

import { compareSync } from 'bcrypt';

import { UsersService } from '@backend/backend/users';
import { ModuleRef } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ALREADY_REGISTERED_ERROR } from './constants';

import { LoginInput } from './dtos/auth.input';
import { AccessToken, RefreshToken, User } from '@backend/backend/entities';
import { Repository } from 'typeorm';
import { addDays, addHours } from 'date-fns';

import {
  HttpStatus,
  OnModuleInit,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export class AuthService implements OnModuleInit {
  private userService: UsersService;
  constructor(
    private readonly jwtService: JwtService,
    private moduleRef: ModuleRef,
    @InjectRepository(RefreshToken)
    private readonly refreshTokenRepo: Repository<RefreshToken>,
    @InjectRepository(AccessToken)
    private readonly accessTokenRepo: Repository<AccessToken>
  ) {}

  onModuleInit() {
    this.userService = this.moduleRef.get(UsersService, { strict: false });
  }

  async getUser(id: string) {
    return await this.userService.getUserById(id);
  }

  async login(input: LoginInput) {
    const { email, phone, password } = input;
    const username = email || phone;

    const user = await this.userService.findOneByEmailOrPhone(username);
    if (!user) {
      return {
        code: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }
    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) {
      return {
        code: HttpStatus.UNAUTHORIZED,
        message: 'Invalid Password',
      };
    }

    const accessToken = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
      username: user.profile?.username,
    });

    const refreshToken = await this.jwtService.signAsync(
      {
        id: user.id,
        email: user.email,
        username: user.profile?.username,
      },

      { secret: process.env.JWT_REFRESH_TOKEN_SECRET }
    );
    return this.saveTokens(user, refreshToken, accessToken);
  }
  async saveTokens(user: User, refreshToken: string, accessToken: string) {
    const refresh = await this.refreshTokenRepo.save(
      this.refreshTokenRepo.create({
        user,
        token: refreshToken,
        expiresAt: addDays(new Date(), 7),
      })
    );

    const access = await this.accessTokenRepo.save(
      this.accessTokenRepo.create({
        user,
        token: accessToken,
        expiresAt: addHours(new Date(), 6),
      })
    );

    return {
      refreshToken: refresh.token,
      refreshTokenExpiresAt: refresh.expiresAt,
      accessToken: access.token,
      accessTokenExpiresAt: access.expiresAt,
    };
  }

  async checkEmail(email: string) {
    const user = await this.userService.findOneByEmailOrPhone(email);
    if (user) {
      throw new UnprocessableEntityException(ALREADY_REGISTERED_ERROR);
    }

    return {
      code: HttpStatus.OK,
      message: 'Email is available',
      timestamp: new Date().toLocaleDateString(),
    };
  }

  async refreshToken(request: Request) {
    //@ts-ignore
    const tokenData = request.cookies['refreshToken'];

    // * If the refreshToken object is not found
    if (!tokenData) {
      throw new UnauthorizedException();
    }

    const refreshToken = tokenData['value'];

    // * If the actual token value is not found
    if (!refreshToken) {
      throw new UnauthorizedException();
    }

    const user = await this.jwtService.verifyAsync(refreshToken, {
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
    });

    const withRelations = await this.userService.findOneByEmailOrPhone(
      user.email
    );

    const refresh = await this.jwtService.signAsync(
      {
        id: withRelations.id,
        email: withRelations.email,
        username: withRelations.profile?.username,
      },
      { expiresIn: '7d', secret: process.env.JWT_REFRESH_TOKEN_SECRET }
    );

    const access = await this.jwtService.signAsync(
      {
        id: withRelations.id,
        email: withRelations.email,
        username: withRelations.profile?.username,
      },
      { expiresIn: '6h', secret: process.env.JWT_SECRET }
    );

    return this.saveTokens(user, refresh, access);
  }
}
