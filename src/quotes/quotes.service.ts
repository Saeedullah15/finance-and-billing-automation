/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Repository } from 'typeorm';
import { Quote } from './entities/quote.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuotesService {
  // inject quote repository
  constructor(@InjectRepository(Quote) private readonly quoteRepository: Repository<Quote>) { }

  // POST
  create(createQuoteDto: CreateQuoteDto): Promise<Quote> {
    const quote: Quote = new Quote();
    quote.customerName = createQuoteDto.customerName;
    quote.preparedDate = createQuoteDto.preparedDate;
    quote.productName = createQuoteDto.productName;
    quote.quantity = createQuoteDto.quantity;
    quote.price = createQuoteDto.price;
    return this.quoteRepository.save(quote);
  }

  // GET all
  findAll(): Promise<Quote[]> {
    return this.quoteRepository.find();
  }

  // GET one
  findOne(id: number) {
    return this.quoteRepository.findOneBy({ id });
  }

  // PATCH
  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    const quote: Quote = new Quote();
    quote.customerName = updateQuoteDto.customerName;
    quote.preparedDate = updateQuoteDto.preparedDate;
    quote.productName = updateQuoteDto.productName;
    quote.quantity = updateQuoteDto.quantity;
    quote.price = updateQuoteDto.price;
    quote.id = id;
    return this.quoteRepository.save(quote);
  }

  // DELETE
  remove(id: number) {
    return this.quoteRepository.delete(id);
  }
}
