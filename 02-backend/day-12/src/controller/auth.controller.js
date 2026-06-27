const userModel = require("../Model/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require('crypto');

async function register(req, res) {
  const { name, email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (user) {
    return res.status(409).json({
      message: "User already exists with this email address",
      success: false,
    });
  }

  const hash = crypto.createHash('md5').update(password).digest('hex');
  user = await userModel.create({
    name,
    email,
    password: hash
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("jwt_token", token);
  return res.status(201).json({
    message: "User registered successfully",
    success: true,
  });
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: "Incorrect email id or password",
      success: false,
    });
  }

  const hash = crypto.createHash('md5').update(password).digest('hex');
  if (hash !== user.password) {
    return res.status(401).json({
      message: "Incorrect email id or password",
      success: false,
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("jwt_token", token);

  return res.status(200).json({
    message: "Login successful",
    success: true,
    user,
  });
}

async function logout(req, res) {
  res.clearCookie("jwt_token");
  res.json({
    message: "You are logged out",
    success: true,
  });
}

module.exports = {
  register,
  login,
  logout,
};
