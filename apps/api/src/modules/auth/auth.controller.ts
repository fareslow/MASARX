import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('sign-up')
  signUp(@Body() body: Record<string, unknown>) {
    return {
      message: 'Signup accepted',
      onboardingRequired: true,
      payload: body
    };
  }

  @Post('sign-in')
  signIn(@Body() body: Record<string, unknown>) {
    return {
      message: 'Signin accepted',
      accessToken: 'dev-token',
      user: {
        email: body.email ?? null,
        phone: body.phone ?? null
      }
    };
  }
}
