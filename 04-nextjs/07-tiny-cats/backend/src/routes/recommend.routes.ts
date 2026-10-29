import { Router } from "express";
import recommendCatController from "../controllers/recommend.controller.js";

const recommendRouter = Router();

recommendRouter.post("/recommend", recommendCatController);

export default recommendRouter;
