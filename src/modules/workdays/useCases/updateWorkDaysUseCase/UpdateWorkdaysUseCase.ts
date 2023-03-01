import { inject, injectable } from "tsyringe";
import { IUpdateWorkdaysDTO } from "../../dtos/IUpdateWorkdaysDTO";
import { IWorkdaysRepository } from "../../repositories/IWorkdaysRepository";

@injectable()
class UpdateWorkdaysUseCase {
    constructor(
        @inject("WorkdaysRepository")
        private workdaysRepository: IWorkdaysRepository
    ) { }

    async execute({ workdays, worker_id }) {

        const allWorkdays = await this.workdaysRepository.listWorkdaysByWorkerId(worker_id);

        // if workdays is empty, delete all from database
        if (workdays.length < 0 && allWorkdays.length > 0) {
            allWorkdays.map(async (workday) => {
                await this.workdaysRepository.delete(workday.id)
            })
            return
        }


        for (let workday of workdays) {
            const workdayAlreadyExists = await this.workdaysRepository.findWorkdayJournal(workday.day)

            // if no exists, create
            if (!workdayAlreadyExists) {
                await this.workdaysRepository.updateWorkdays(workday)
            }

            // if exists, update using id
            if (workdayAlreadyExists) {
                await this.workdaysRepository.updateWorkdays({
                    id: workdayAlreadyExists.id,
                    ...workday
                })
            }
        }

        // delete all workdays isn't in request body
        allWorkdays.map(async (map) => {
            const workday = workdays.find((find) => find.day === map.day)

            if (!workday) {
                await this.workdaysRepository.delete(map.id)
            }
        })

    }
}
export { UpdateWorkdaysUseCase }