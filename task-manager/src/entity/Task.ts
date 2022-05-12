import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks")
export default class Task {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("varchar")
    taskName: string

    @Column("boolean")
    isCompleted: boolean
};