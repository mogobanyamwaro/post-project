import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginInput, RegisterUserInput } from './dtos/auth.input';

import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@ApiTags('Authentication Apis')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginInput })
  @ApiOperation({
    summary: 'Login A User',
  })
  async login(
    @Body() input: LoginInput,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const result = await this.authService.login(input);
    //@ts-ignore

    res.cookie('refreshToken', {
      //@ts-ignore
      value: result.refreshToken,
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });
    //@ts-ignore
    res.json({ result });
  }

  @Get('check/:email')
  @ApiOperation({
    summary: 'Check if a user is registered',
  })
  async checkEmail(
    @Param('email') email: string,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const result = await this.authService.checkEmail(email);
    //@ts-ignore
    res.json(result);
  }

  @Get('refresh-token')
  @ApiOperation({ summary: 'Refresh Token' })
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    const result = await this.authService.refreshToken(req);
    //@ts-ignore
    res.json({ result });
  }
}
