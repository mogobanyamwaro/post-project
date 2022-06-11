import { Profile, User } from '@backend/backend/entities';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    TypeOrmModule.forFeature([User, Profile]),
  ],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class BackendUsersModule {}
