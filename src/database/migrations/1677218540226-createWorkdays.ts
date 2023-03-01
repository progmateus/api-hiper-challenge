import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createWorkdays1677218540226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "workdays",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "day",
                        type: "varchar"
                    },
                    {
                        name: "worker_id",
                        type: "uuid"
                    },
                    {
                        name: "entry_time",
                        type: "varchar"
                    },
                    {
                        name: "departure_time",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("workdays")
    }

}
