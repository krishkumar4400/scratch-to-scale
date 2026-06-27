import hashPassword from "../utils/hashPassword.js";
import UserModel from "../Model/UserModel.js";
import generateAccessToken from "../utils/jwtTokens.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const normalizedEmail = email.trim().toString();

    let user = await UserModel.findOne({ email });

    if (user) {
      return res.status(401).json({
        message: "User already exist",
        success: false,
      });
    }

    const hashedPassword = await hashPassword(password);

    user = await UserModel.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    const token = generateAccessToken(user._id);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
