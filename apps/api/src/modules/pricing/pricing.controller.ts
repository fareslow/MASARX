import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuoteDto } from './create-quote.dto';

@Controller('pricing')
export class PricingController {
  @Post('quotes')
  quote(@Body() dto: CreateQuoteDto) {
    return {
      input: dto,
      options: [
        { carrier: 'MASARX Express', eta: dto.scope === 'international' ? '3-5 days' : '1-2 days', price: 29.5 },
        { carrier: 'SPL Priority', eta: dto.scope === 'international' ? '4-6 days' : '2-3 days', price: 31.2 }
      ]
    };
  }
}
