/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateFixedAssetDto } from './dto/create-fixed-asset.dto';
import { UpdateFixedAssetDto } from './dto/update-fixed-asset.dto';
import { Repository } from 'typeorm';
import { FixedAsset } from './entities/fixed-asset.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FixedAssetsService {
  constructor(@InjectRepository(FixedAsset) private readonly fixedAssetRepository: Repository<FixedAsset>) { }

  create(createFixedAssetDto: CreateFixedAssetDto): Promise<FixedAsset> {
    const fixedAsset: FixedAsset = new FixedAsset();
    fixedAsset.assetName = createFixedAssetDto.assetName;
    fixedAsset.purchaseDate = createFixedAssetDto.purchaseDate;
    fixedAsset.purchaseCost = createFixedAssetDto.purchaseCost;
    fixedAsset.currentValue = createFixedAssetDto.currentValue;
    fixedAsset.depreciationRate = createFixedAssetDto.depreciationRate;
    return this.fixedAssetRepository.save(fixedAsset);
  }

  findAll(): Promise<FixedAsset[]> {
    return this.fixedAssetRepository.find();
  }

  findOne(id: number): Promise<FixedAsset> {
    return this.fixedAssetRepository.findOneBy({ id });
  }

  update(id: number, updateFixedAssetDto: UpdateFixedAssetDto) {
    const fixedAsset: FixedAsset = new FixedAsset();
    fixedAsset.assetName = updateFixedAssetDto.assetName;
    fixedAsset.purchaseDate = updateFixedAssetDto.purchaseDate;
    fixedAsset.purchaseCost = updateFixedAssetDto.purchaseCost;
    fixedAsset.currentValue = updateFixedAssetDto.currentValue;
    fixedAsset.depreciationRate = updateFixedAssetDto.depreciationRate;
    fixedAsset.id = id;
    return this.fixedAssetRepository.save(fixedAsset);
  }

  remove(id: number) {
    return this.fixedAssetRepository.delete(id);
  }
}
