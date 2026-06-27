const express = require("express");
const userModel = require("../Model/User.model");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (user) {
    return res.status(409).json({
      message: "Email already exists",
      success: false,
    });
  }
  const hash = await bcryptjs.hash(password, 10);

  user = await userModel.create({
    name,
    email,
    password: hash,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "strict",
    secure: false,
  });

  return res.status(201).json({
    message: "You are registered successfully",
    success: true,
  });
});

userRouter.get("/get-me", async (req, res) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({
        message: "You are not logged in",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.id);
    req.user = decoded.id;

    const user = await userModel.findById(decoded.id);
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: "Incorrect email or password",
      success: false,
    });
  }

  const isMatch = bcryptjs.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      message: "Incorrect email or password",
      success: false,
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);
  return res.status(200).json({
    message: "You are logged in",
    success: true,
  });
});

module.exports = userRouter;
