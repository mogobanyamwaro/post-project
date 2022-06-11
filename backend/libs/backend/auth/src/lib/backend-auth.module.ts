import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessToken, RefreshToken, User } from '@backend/backend/entities';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TokenService } from './service/token.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { BackendUsersModule } from '@backend/backend/users';

@Module({
  imports: [
    forwardRef(() => BackendUsersModule),

    TypeOrmModule.forFeature([User, AccessToken, RefreshToken]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRES_IN,
        },
      }),
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, TokenService],
  exports: [],
})
export class BackendAuthModule {}
