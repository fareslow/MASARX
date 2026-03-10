import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

@Controller('orders')
export class OrdersController {
  @Get()
  list(@Query() query: PaginationQueryDto) {
    return {
      pagination: query,
      data: [
        { orderNumber: 'ORD-10241', status: 'new', city: 'Riyadh' },
        { orderNumber: 'ORD-10240', status: 'ready_to_ship', city: 'Jeddah' }
      ]
    };
  }

  @Post()
  create(@Body() body: Record<string, unknown>) {
    return {
      message: 'Order accepted',
      order: body
    };
  }
}
