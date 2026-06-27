import UserModel from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { emailVerificationMailgenContent, sendEmail } from "../utils/mail.js";

const generateAccessAndRefreshTokens = async (user) => {
  try {
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.error(error);
    throw new ApiError(500, error.message, error);
  }
};

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production" ? true : false,
  sameSite: process.env.NODE_ENV === "development" ? "strict" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, role } = req.body;

  let user = await UserModel.findOne({
    $or: [{ email }, { username }],
  });

  if (user) {
    throw new ApiError(
      409,
      "User with this email or username already exists",
      [],
    );
  }

  user = await UserModel.create({
    username,
    email,
    password,
    role,
  });

  if (!user) {
    throw new ApiError(400, "Something went wrong while registering a user");
  }

  const { unHashedToken, hashedToken, tokenExpiry } =
    user.generateTemporaryTokens();
  const { accessToken, refreshToken } =
    await generateAccessAndRefreshTokens(user);

  user.emailVerificationToken = hashedToken;
  user.emailVerificationTokenExpiry = tokenExpiry;
  user.refreshToken = refreshToken;

  await user.save({ validateBeforeSave: false });

  sendEmail({
    email: user?.email,
    subject: "Verify Email id",
    mailgenContent: emailVerificationMailgenContent(
      user.username,
      `${req.protocol}://${req.get("host")}/api/v1/auth/verify-email/${unHashedToken}`,
    ),
  }).catch(console.error);

  return res
    .status(201)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        201,
        user,
        "User registered successfully and verification email has been sent on your email",
      ),
    );
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;
  const user = await UserModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  const { accessToken, refreshToken } = generateAccessAndRefreshTokens(user);

  user.refreshToken = refreshToken;
  await user.save();

  return res
    .status(201)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        201,
        user,
        "User registered successfully and verification email has been sent on your email",
      ),
    );
});

export { registerUser, loginUser };
