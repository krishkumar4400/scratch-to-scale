import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controllers.js";
import {
  loginRequestValidationSchema,
  registerRequestValidationSchema,
} from "../validations/index.js";
import { validate } from "../middlewares/validator.middlewares.js";

const authRouter = Router();

authRouter.post(
  "/register",
  registerRequestValidationSchema(),
  validate,
  registerUser,
);
authRouter.post("/login", loginRequestValidationSchema(), validate, loginUser);

export default authRouter;
