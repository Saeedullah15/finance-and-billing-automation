/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) { }

  @Post('create-quote')
  create(@Body() createQuoteDto: CreateQuoteDto) {
    return this.quotesService.create(createQuoteDto);
  }

  @Get('all-quotes')
  findAll() {
    return this.quotesService.findAll();
  }

  @Get('quote/:id')
  findOne(@Param('id') id: string) {
    return this.quotesService.findOne(+id);
  }

  @Patch('quote/:id')
  update(@Param('id') id: string, @Body() updateQuoteDto: UpdateQuoteDto) {
    return this.quotesService.update(+id, updateQuoteDto);
  }

  @Delete('quote/:id')
  remove(@Param('id') id: string) {
    return this.quotesService.remove(+id);
  }
}
