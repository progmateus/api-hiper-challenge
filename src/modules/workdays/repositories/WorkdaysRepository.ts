import { getRepository, Repository } from "typeorm";
import { IUpdateWorkdaysDTO } from "../dtos/IUpdateWorkdaysDTO";
import { Workday } from "../entities/Workday";
import { IWorkdaysRepository } from "./IWorkdaysRepository";


class WorkdaysRepository implements IWorkdaysRepository {
    private repository: Repository<Workday>

    constructor() {
        this.repository = getRepository(Workday);
    }

    async listWorkdaysByWorkerId(worker_id: string): Promise<Workday[]> {
        const workdays = await this.repository.find({ worker_id })

        return workdays
    }

    async updateWorkdays({
        id,
        day,
        departure_time,
        entry_time,
        worker_id
    }: IUpdateWorkdaysDTO): Promise<void> {

        const workday = this.repository.create({
            id,
            day,
            departure_time,
            entry_time,
            worker_id
        })

        await this.repository.save(workday);
    }

    async findWorkdayJournal(day: string): Promise<Workday> {
        const workday = await this.repository.findOne({ day })
        return workday
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id })
    }
}

export { WorkdaysRepository }