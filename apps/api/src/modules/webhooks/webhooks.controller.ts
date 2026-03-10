import { Body, Controller, Param, Post } from '@nestjs/common';

@Controller('webhooks')
export class WebhooksController {
  @Post(':provider')
  receive(@Param('provider') provider: string, @Body() body: Record<string, unknown>) {
    return {
      accepted: true,
      provider,
      receivedAt: new Date().toISOString(),
      payloadKeys: Object.keys(body)
    };
  }
}
