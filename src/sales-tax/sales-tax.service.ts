/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateSalesTaxDto } from './dto/create-sales-tax.dto';
// import { UpdateSalesTaxDto } from './dto/update-sales-tax.dto';
import { Repository } from 'typeorm';
import { SalesTax } from './entities/sales-tax.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalesTaxService {
  // inject sales tax repository
  constructor(@InjectRepository(SalesTax) private readonly salesTaxRepository: Repository<SalesTax>) { }

  // POST
  create(createSalesTaxDto: CreateSalesTaxDto): Promise<SalesTax> {
    const salesTax: SalesTax = new SalesTax();
    salesTax.productName = createSalesTaxDto.productName;
    salesTax.price = createSalesTaxDto.price;
    salesTax.quantity = createSalesTaxDto.quantity;
    salesTax.tax = createSalesTaxDto.tax;
    return this.salesTaxRepository.save(salesTax);
  }

  // GET all
  findAll(): Promise<SalesTax[]> {
    return this.salesTaxRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} salesTax`;
  // }

  // update(id: number, updateSalesTaxDto: UpdateSalesTaxDto) {
  //   return `This action updates a #${id} salesTax`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} salesTax`;
  // }
}
