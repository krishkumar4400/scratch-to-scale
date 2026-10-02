import userModel from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, contactNumber } = req.body;
    const existingUser = await userModel.findOne({
      $or: [{ email }, { contactNumber }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists with this email or phone",
        success: false,
      });
    }

    const user = await userModel.create({
      fullName,
      email,
      password,
      contactNumber,
    });

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    return res
      .status(201)
      .cookie("accessToken", accessToken, {
        httOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .cookie("refreshToken", refreshToken, {
        httOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        message: "User has been registered successfully",
        success: true,
        user,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to register user",
      success: false,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, contactNumber, password } = req.body;
    const user = await userModel
      .findOne({
        $or: [{ email }, { contactNumber }],
      })
      .select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    return res
      .status(201)
      .cookie("accessToken", accessToken, {
        httOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .cookie("refreshToken", refreshToken, {
        httOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        message: "User has been logged in successfully",
        success: true,
        user,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to login user",
      success: false,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User id is not valid",
        success: false,
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      success: true,
      status: "OK",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed find user",
      success: false,
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie("accessToken")
      .clearCookie("refreshToken")
      .json({
        message: "You have been logged out successfully",
        success: true,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to logout user",
      success: false,
    });
  }
};

export { registerUser, loginUser, getUser, logoutUser };
