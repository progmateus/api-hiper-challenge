import { Router } from "express";
import { UpdateWorkdaysController } from "../../../../modules/workdays/useCases/updateWorkDaysUseCase/UpdateWorkdaysController";
import { ListWorkDaysController } from "../../../../modules/workdays/useCases/listWorkDaysUseCase/ListWorkdayController";


const workdaysRoutes = Router();

const listWorkdays = new ListWorkDaysController()
const editWorkdays = new UpdateWorkdaysController()


workdaysRoutes.get("/:worker_id", listWorkdays.handle)
workdaysRoutes.put("/", editWorkdays.handle)



export { workdaysRoutes }