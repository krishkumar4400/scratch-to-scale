import { Router } from "express";
import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller.js";
import { validateRegisterUser } from "../validators/request.validator.js";
import { validate } from "../middlewares/validator.middlewares.js";
import {
  authenticationMiddleware,
  isAuthenticated,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", authenticationMiddleware, isAuthenticated, getUser);
router.post("/logout", authenticationMiddleware, isAuthenticated, logoutUser);

export default router;
