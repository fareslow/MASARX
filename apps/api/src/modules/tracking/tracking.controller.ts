import { Controller, Get, Param } from '@nestjs/common';

@Controller('tracking')
export class TrackingController {
  @Get(':trackingNumber')
  show(@Param('trackingNumber') trackingNumber: string) {
    return {
      trackingNumber,
      status: 'in_transit',
      eta: '2026-03-11',
      events: [
        { at: '2026-03-10T08:20:00.000Z', status: 'picked_up' },
        { at: '2026-03-10T13:40:00.000Z', status: 'in_transit' }
      ]
    };
  }
}
