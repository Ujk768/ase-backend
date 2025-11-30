import { Router } from "express";
import { getRecommendations } from "../controllers/recommendationsController";

export const recommendationsRouter = Router();

recommendationsRouter.post("/", getRecommendations);