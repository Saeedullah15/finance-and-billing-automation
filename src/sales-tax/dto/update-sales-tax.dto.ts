/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateSalesTaxDto } from './create-sales-tax.dto';

export class UpdateSalesTaxDto extends PartialType(CreateSalesTaxDto) {
    productName: string;
    quantity: number;
    price: number;
    tax: string;
}
