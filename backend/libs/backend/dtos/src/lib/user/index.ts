import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserInput {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The first name of the user',
  })
  firstName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The last name of the user',
  })
  lastName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The username of the user',
  })
  username?: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The email of the user',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'The password of the user',
  })
  password: string;

  @IsPhoneNumber()
  @ApiProperty({
    description: "User's phone",
  })
  @IsOptional()
  phone?: string;
}

export * from './auth.dto';
