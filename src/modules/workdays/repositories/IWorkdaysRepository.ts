import { IUpdateWorkdaysDTO } from "../dtos/IUpdateWorkdaysDTO";
import { Workday } from "../entities/Workday";

interface IWorkdaysRepository {
    listWorkdaysByWorkerId(worker_id: string): Promise<Workday[]>;
    updateWorkdays(data: IUpdateWorkdaysDTO): Promise<void>;
    findWorkdayJournal(day): Promise<Workday>
    delete(id: string): Promise<void>;
}

export { IWorkdaysRepository }