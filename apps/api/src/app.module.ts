import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ShipmentsModule } from './modules/shipments/shipments.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { PricingModule } from './modules/pricing/pricing.module';
import { TrackingModule } from './modules/tracking/tracking.module';
import { WebhooksModule } from './modules/webhooks/webhooks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    AuthModule,
    AccountsModule,
    OrdersModule,
    ShipmentsModule,
    IntegrationsModule,
    PricingModule,
    TrackingModule,
    WebhooksModule
  ]
})
export class AppModule {}
