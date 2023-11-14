/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateQuoteDto } from './create-quote.dto';

export class UpdateQuoteDto extends PartialType(CreateQuoteDto) {
    customerName: string;
    preparedDate: string;
    productName: string;
    quantity: number;
    price: number;
}
