import { Router } from "express";
import userModel from "../Models/User.Model.js";

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  await userModel.create(req.body);
  return res.json({
    message: "User registered",
    success: true,
  });
});

export default userRouter;
