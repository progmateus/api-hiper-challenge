import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";


@Entity("workdays")
class Workday {
    @PrimaryColumn()
    id: string;

    @Column()
    worker_id: string;

    @Column()
    day: string;

    @Column()
    entry_time: string;

    @Column()
    departure_time: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date


    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}
export { Workday };