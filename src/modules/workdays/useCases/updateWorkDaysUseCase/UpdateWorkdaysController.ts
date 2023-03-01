import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateWorkdaysUseCase } from "./UpdateWorkdaysUseCase"

class UpdateWorkdaysController {
    async handle(request: Request, response: Response) {
        const { workdays, worker_id } = request.body

        const updateWorkdaysUseCase = container.resolve(UpdateWorkdaysUseCase)

        const testResponse = await updateWorkdaysUseCase.execute({ workdays, worker_id })

        return response.status(200).json(testResponse);
    }
}

export { UpdateWorkdaysController }