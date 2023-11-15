/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateDashboardDto } from './create-dashboard.dto';

export class UpdateDashboardDto extends PartialType(CreateDashboardDto) {
    accountNumber: number;
    balance: number;
    accountReceivable: number;
    accountPayable: number;
    lastTransaction: string;
}
