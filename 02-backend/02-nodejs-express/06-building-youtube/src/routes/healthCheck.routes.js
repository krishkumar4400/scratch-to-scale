import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controllers.js";

const healthCheckRouter = Router();

healthCheckRouter.route("/").get(healthCheck);

export default healthCheckRouter;
