/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateFixedAssetDto } from './create-fixed-asset.dto';

export class UpdateFixedAssetDto extends PartialType(CreateFixedAssetDto) {
    assetName: string;
    purchaseDate: string;
    purchaseCost: number;
    currentValue: number;
    depreciationRate: string;
}
