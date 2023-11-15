/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesModule } from './quotes/quotes.module';
import { Quote } from './quotes/entities/quote.entity';
import { SalesTaxModule } from './sales-tax/sales-tax.module';
import { SalesTax } from './sales-tax/entities/sales-tax.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pg16@23',
      database: 'finance-and-billing-db',
      entities: [Quote, SalesTax],
      synchronize: true,
      autoLoadEntities: true,
    }),
    QuotesModule,
    SalesTaxModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
