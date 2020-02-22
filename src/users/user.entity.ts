import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @PrimaryColumn()
    username: string;


    @Column()
    password: string;

    @Column({default: true})
    isActive: boolean;
}