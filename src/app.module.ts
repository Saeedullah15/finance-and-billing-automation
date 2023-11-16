/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesModule } from './quotes/quotes.module';
import { Quote } from './quotes/entities/quote.entity';
import { SalesTaxModule } from './sales-tax/sales-tax.module';
import { SalesTax } from './sales-tax/entities/sales-tax.entity';
import { AnalyticsModule } from './analytics/analytics.module';
import { Analytics } from './analytics/entities/analytics.entity';
import { DashboardModule } from './dashboard/dashboard.module';
import { Dashboard } from './dashboard/entities/dashboard.entity';
import { FixedAssetsModule } from './fixed-assets/fixed-assets.module';
import { FixedAsset } from './fixed-assets/entities/fixed-asset.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pg16@23',
      database: 'finance-and-billing-db',
      entities: [Quote, SalesTax, Analytics, Dashboard, FixedAsset],
      synchronize: true,
      autoLoadEntities: true,
    }),
    QuotesModule,
    SalesTaxModule,
    AnalyticsModule,
    DashboardModule,
    FixedAssetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
