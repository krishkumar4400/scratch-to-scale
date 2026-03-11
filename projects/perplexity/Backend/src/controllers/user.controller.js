import userModel from "../Models/User.Model";
import { validationResult } from "express-validator";

export async function registerController(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
        success: false,
      });
    }

    const { username, email, password } = req.body;

    let user = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (user && user.username === username) {
      return res.status(409).json({
        message:
          user.username === username
            ? "username already exists"
            : "email already exists",
        success: false,
      });
    }

    user = await userModel.create({
        username,email,password 
    });


  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}
