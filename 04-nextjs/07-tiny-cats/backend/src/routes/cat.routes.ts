import { Router } from "express";
import {
  createCatController,
  getAllCatsController,
  getCatByIdController,
  searchCatsController,
} from "../controllers/cats.controller.js";

const catRouter = Router();

catRouter.post("/create", createCatController);
catRouter.get("/search/all", searchCatsController);
catRouter.get("/", getAllCatsController);
catRouter.get("/:id", getCatByIdController);
catRouter.post("/recommend");

export default catRouter;
