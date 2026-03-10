import { Controller, Get } from '@nestjs/common';

@Controller('integrations')
export class IntegrationsController {
  @Get()
  list() {
    return {
      data: [
        { provider: 'shopify', type: 'commerce', status: 'connected' },
        { provider: 'spl', type: 'carrier', status: 'connected' },
        { provider: 'aramex', type: 'carrier', status: 'error' }
      ]
    };
  }
}
