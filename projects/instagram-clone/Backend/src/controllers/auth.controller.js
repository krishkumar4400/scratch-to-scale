const userModel = require("../Model/User.Model.js");

const jwt = require("jsonwebtoken");
const userStatsModel = require("../Model/userStats.Model.js");
const { hashPassword } = require("../utils/passwordHashing.utils.js");

async function userRegister(req, res) {
  try {
    const { username, email, password } = req.body;

    let user = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (user) {
      return res.status(409).json({
        message:
          "User already exists" +
          (user.email === email ? "email has taken" : "username has taken"),
        success: false,
      });
    }

    const hash = await hashPassword(password);
    user = await userModel.create({
      username,
      email,
      passwordHash: hash,
    });

    await userStatsModel.create({
      userId: user._id,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
    });

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

async function loginController(req, res) {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);

    const user = await userModel.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token);

    return res.status(200).json({
      message: "You are logged in successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

async function logoutController(req, res) {
  try {
    return res.clearCookie().status(200).json({
      message: "You are logged out",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

module.exports = {
  userRegister,
  loginController,
  logoutController,
};
