const userModel = require("../Model/User.model.js");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  const { name, email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: "User already exists with this email address",
      success: false,
    });
  }

  user = await userModel.create({ name, email, password });
  console.log(user);

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  console.log(token);

  res.cookie("jwt_token", token);

  return res.status(201).json({
    message: "User registered successfully",
    success: true,
    token,
    user,
  });
}

module.exports = {
  register,
};
