import { inject, injectable } from "tsyringe";
import { IWorkdaysRepository } from "../../repositories/IWorkdaysRepository";

@injectable()
class ListWorkdaysUseCase {

    constructor(
        @inject("WorkdaysRepository")
        private workdaysRepository: IWorkdaysRepository
    ) { }

    async execute(worker_id: string) {
        const workdays = await this.workdaysRepository.listWorkdaysByWorkerId(worker_id);

        return workdays
    }

}
export { ListWorkdaysUseCase }