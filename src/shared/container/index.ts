
import { container } from "tsyringe";
import { IWorkdaysRepository } from "../../modules/workdays/repositories/IWorkdaysRepository";
import { WorkdaysRepository } from "../../modules/workdays/repositories/WorkdaysRepository";

container.registerSingleton<IWorkdaysRepository>(
    "WorkdaysRepository",
    WorkdaysRepository
);