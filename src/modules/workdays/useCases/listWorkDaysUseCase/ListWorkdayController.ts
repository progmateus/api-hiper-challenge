import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListWorkdaysUseCase } from "./ListWorkdaysUseCase";


class ListWorkDaysController {

    async handle(request: Request, response: Response) {

        const { worker_id } = request.params;

        const listWorkdaysUseCase = container.resolve(ListWorkdaysUseCase);

        const workdays = await listWorkdaysUseCase.execute(worker_id);

        return response.json(workdays)
    }

}
export { ListWorkDaysController }