/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalesTaxService } from './sales-tax.service';
import { CreateSalesTaxDto } from './dto/create-sales-tax.dto';
// import { UpdateSalesTaxDto } from './dto/update-sales-tax.dto';

@Controller('sales-tax')
export class SalesTaxController {
  constructor(private readonly salesTaxService: SalesTaxService) { }

  @Post('calculate-tax')
  create(@Body() createSalesTaxDto: CreateSalesTaxDto) {
    return this.salesTaxService.create(createSalesTaxDto);
  }

  @Get('report')
  findAll() {
    return this.salesTaxService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.salesTaxService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSalesTaxDto: UpdateSalesTaxDto) {
  //   return this.salesTaxService.update(+id, updateSalesTaxDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.salesTaxService.remove(+id);
  // }
}
