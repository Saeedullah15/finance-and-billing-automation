/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { Repository } from 'typeorm';
import { Analytics } from './entities/analytics.entity';
import { InjectRepository } from '@nestjs/typeorm';
// import { UpdateAnalyticsDto } from './dto/update-analytics.dto';

@Injectable()
export class AnalyticsService {
  constructor(@InjectRepository(Analytics) private readonly analyticsRepository: Repository<Analytics>) { }

  create(createAnalyticsDto: CreateAnalyticsDto) {
    const analytics: Analytics = new Analytics();
    analytics.revenue = createAnalyticsDto.revenue;
    analytics.expense = createAnalyticsDto.expense;
    analytics.profit = createAnalyticsDto.profit;
    analytics.financialHealth = createAnalyticsDto.financialHealth;
    analytics.returnOnInvestment = createAnalyticsDto.returnOnInvestment;
    return this.analyticsRepository.save(analytics);
  }

  findAll() {
    return this.analyticsRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} analytics`;
  // }

  // update(id: number, updateAnalyticsDto: UpdateAnalyticsDto) {
  //   return `This action updates a #${id} analytics`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} analytics`;
  // }
}
