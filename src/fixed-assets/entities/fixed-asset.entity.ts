/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FixedAsset {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    assetName: string;

    @Column()
    purchaseDate: string;

    @Column()
    purchaseCost: number;

    @Column()
    currentValue: number;

    @Column()
    depreciationRate: string;
}
