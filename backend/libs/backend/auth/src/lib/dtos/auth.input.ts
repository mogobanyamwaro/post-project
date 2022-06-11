/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  Validate,
} from 'class-validator';

export class LoginInput {
  @ApiProperty({
    description: "User's email or Username",
  })
  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: "User's phone",
    example: '+923335555555',
  })
  @IsPhoneNumber()
  @IsNotEmpty()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: "User's password",
  })
  @IsNotEmpty()
  password: string;
}

export class RegisterUserInput {
  @ApiProperty({
    description: "User's email",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "User's firstName",
  })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({
    description: "User's lastName",
  })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({
    description: "User's username",
  })
  @IsOptional()
  @IsNotEmpty()
  username?: string;

  @ApiProperty({
    description: "User's phone",
  })
  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: "User's password",
  })
  @IsNotEmpty()
  password: string;
}
