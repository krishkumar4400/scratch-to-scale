import { Router } from "express";
import { validate } from "../validate/zod.js";
import { register } from "../Controllers/userController.js";
import { registerSchema } from "../Schemas/auth.schema.js";

const authRouter = Router();

authRouter.post('/login', validate(registerSchema), register);