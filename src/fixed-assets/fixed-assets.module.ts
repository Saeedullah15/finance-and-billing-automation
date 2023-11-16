/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FixedAssetsService } from './fixed-assets.service';
import { FixedAssetsController } from './fixed-assets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FixedAsset } from './entities/fixed-asset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FixedAsset])],
  controllers: [FixedAssetsController],
  providers: [FixedAssetsService],
})
export class FixedAssetsModule { }
