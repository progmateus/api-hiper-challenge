import "reflect-metadata";
import "../../../database/index"

import express, { Request, Response, NextFunction } from "express";
import createConnection from "../../../database/index";
import cors from "cors"

import "../../container/index"
import { router } from "./routes";


createConnection();
const app = express();
app.use(express.json())
app.use(cors());

app.use(router)

export { app };