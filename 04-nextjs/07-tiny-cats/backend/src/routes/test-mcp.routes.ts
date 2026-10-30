import { Router } from "express";
import {
  getAllCats,
  recommendCats,
  testMCPController,
} from "../controllers/test-mcp.controller.js";

const mcpRouter = Router();

mcpRouter.get("/test-mcp", testMCPController);
mcpRouter.post("/recommend", recommendCats);
mcpRouter.get("/all", getAllCats);

export default mcpRouter;
