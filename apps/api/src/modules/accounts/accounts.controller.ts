import { Controller, Get } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  @Get('me')
  me() {
    return {
      id: 'acc_demo',
      name: 'MASARX Demo Account',
      locale: 'ar',
      currency: 'SAR'
    };
  }
}
