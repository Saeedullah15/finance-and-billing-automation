/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dashboard {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accountNumber: number;

    @Column()
    balance: number;

    @Column()
    accountReceivable: number;

    @Column()
    accountPayable: number;

    @Column()
    lastTransaction: string;
}
