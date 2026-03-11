import { Router } from "express";
import { registerValidator } from "../validatiors/userValidator.js";
import { registerController } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", registerValidator, registerController);

export default userRouter;
