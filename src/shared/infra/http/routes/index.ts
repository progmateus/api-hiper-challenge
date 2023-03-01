import { Router } from "express";

import { workdaysRoutes } from "./workday.routes";

const router = Router();

router.use("/workdays", workdaysRoutes);


export { router };