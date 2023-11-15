/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analytics {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    revenue: number;

    @Column()
    expense: number;

    @Column()
    profit: number;

    @Column()
    financialHealth: string;

    @Column()
    returnOnInvestment: string;
}
