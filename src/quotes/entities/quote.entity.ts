/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quote {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerName: string;

    @Column()
    preparedDate: string;

    @Column()
    productName: string;

    @Column()
    quantity: number;

    @Column()
    price: number;
}
