/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { ApiTags } from '@nestjs/swagger';
// import { UpdateAnalyticsDto } from './dto/update-analytics.dto';

@ApiTags('Analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) { }

  @Post('create-analytics')
  create(@Body() createAnalyticsDto: CreateAnalyticsDto) {
    return this.analyticsService.create(createAnalyticsDto);
  }

  @Get('view-analytics')
  findAll() {
    return this.analyticsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.analyticsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAnalyticsDto: UpdateAnalyticsDto) {
  //   return this.analyticsService.update(+id, updateAnalyticsDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.analyticsService.remove(+id);
  // }
}
