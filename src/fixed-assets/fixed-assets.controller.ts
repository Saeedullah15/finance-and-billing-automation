/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FixedAssetsService } from './fixed-assets.service';
import { CreateFixedAssetDto } from './dto/create-fixed-asset.dto';
import { UpdateFixedAssetDto } from './dto/update-fixed-asset.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Fixed Assets')
@Controller('fixed-assets')
export class FixedAssetsController {
  constructor(private readonly fixedAssetsService: FixedAssetsService) { }

  @Post('create-asset')
  create(@Body() createFixedAssetDto: CreateFixedAssetDto) {
    return this.fixedAssetsService.create(createFixedAssetDto);
  }

  @Get('all-assets')
  findAll() {
    return this.fixedAssetsService.findAll();
  }

  @Get('asset/:id')
  findOne(@Param('id') id: string) {
    return this.fixedAssetsService.findOne(+id);
  }

  @Patch('update-asset/:id')
  update(@Param('id') id: string, @Body() updateFixedAssetDto: UpdateFixedAssetDto) {
    return this.fixedAssetsService.update(+id, updateFixedAssetDto);
  }

  @Delete('remove-asset/:id')
  remove(@Param('id') id: string) {
    return this.fixedAssetsService.remove(+id);
  }
}
