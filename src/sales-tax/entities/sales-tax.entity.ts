/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SalesTax {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    tax: string;
}
