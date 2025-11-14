import { Router } from "express";
import {seedDataController} from "../controllers/seedDataController";

export const seedDataRouter = Router();

seedDataRouter.get("/", seedDataController);
