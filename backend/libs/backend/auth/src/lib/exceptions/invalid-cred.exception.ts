import { UnauthorizedException } from '@nestjs/common';

export class InvalidCredentialsException extends UnauthorizedException {
  constructor() {
    super({
      errorType: 'InvalidCredentials',
      message: 'Invalid credentials',
    });
  }
}
export type JwtPayload = {
  id: string;
  username: string;
  email: string;
  role: string;
};
