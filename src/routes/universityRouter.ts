import { Router } from "express";
import { getAllUniversities , findUniveristyByName , compareUniversities} from "../controllers/universityControllers";

export const universityRouter = Router();

universityRouter.get("/all", getAllUniversities);
universityRouter.post("/find", findUniveristyByName);
universityRouter.post("/comp", compareUniversities);
