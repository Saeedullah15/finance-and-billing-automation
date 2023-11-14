/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesModule } from './quotes/quotes.module';
import { Quote } from './quotes/entities/quote.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pg16@23',
      database: 'finance-and-billing-db',
      entities: [Quote],
      synchronize: true,
      autoLoadEntities: true,
    }),
    QuotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
