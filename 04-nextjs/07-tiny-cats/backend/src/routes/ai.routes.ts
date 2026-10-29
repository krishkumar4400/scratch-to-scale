import { Router } from "express";
import { aksAIController } from "../controllers/ai.controller.js";

const aiRouter = Router();

aiRouter.post("/ask", aksAIController);

export default aiRouter;
