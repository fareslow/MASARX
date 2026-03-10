import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

@Controller('shipments')
export class ShipmentsController {
  @Get()
  list(@Query() query: PaginationQueryDto) {
    return {
      pagination: query,
      data: [
        { trackingNumber: 'MSX-883912', status: 'in_transit', carrier: 'MASARX Express' },
        { trackingNumber: 'SPL-119320', status: 'ready_for_pickup', carrier: 'SPL' }
      ]
    };
  }

  @Post()
  create(@Body() body: Record<string, unknown>) {
    return {
      message: 'Shipment creation queued',
      payload: body
    };
  }
}
