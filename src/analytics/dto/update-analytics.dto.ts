/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateAnalyticsDto } from './create-analytics.dto';

export class UpdateAnalyticsDto extends PartialType(CreateAnalyticsDto) {
    revenue: number;
    expense: number;
    profit: number;
    financialHealth: string;
    returnOnInvestment: string;
}
