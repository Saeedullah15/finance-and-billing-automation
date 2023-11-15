/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { Repository } from 'typeorm';
import { Dashboard } from './entities/dashboard.entity';
import { InjectRepository } from '@nestjs/typeorm';
// import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Injectable()
export class DashboardService {
  constructor(@InjectRepository(Dashboard) private readonly dashboardRepository: Repository<Dashboard>) { }

  create(createDashboardDto: CreateDashboardDto) {
    const dashboard: Dashboard = new Dashboard();
    dashboard.accountNumber = createDashboardDto.accountNumber;
    dashboard.balance = createDashboardDto.balance;
    dashboard.accountReceivable = createDashboardDto.accountReceivable;
    dashboard.accountPayable = createDashboardDto.accountPayable;
    dashboard.lastTransaction = createDashboardDto.lastTransaction;
    return this.dashboardRepository.save(dashboard);
  }

  findAll() {
    return this.dashboardRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} dashboard`;
  // }

  // update(id: number, updateDashboardDto: UpdateDashboardDto) {
  //   return `This action updates a #${id} dashboard`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dashboard`;
  // }
}
