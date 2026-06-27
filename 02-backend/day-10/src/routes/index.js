import { Router } from "express";
import { router as healthRouter } from "./health.route.js";

const router = Router();

router.use("/health", healthRouter);

export { router };
