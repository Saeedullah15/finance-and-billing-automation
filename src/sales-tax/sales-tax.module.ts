/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SalesTaxService } from './sales-tax.service';
import { SalesTaxController } from './sales-tax.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesTax } from './entities/sales-tax.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesTax])],
  controllers: [SalesTaxController],
  providers: [SalesTaxService],
})
export class SalesTaxModule { }
