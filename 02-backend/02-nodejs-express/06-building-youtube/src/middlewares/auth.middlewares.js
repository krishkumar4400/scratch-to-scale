import userModel from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import jwt from "jsonwebtoken";

const authMiddleware = asyncHandler(async (req, res, next) => {
  const accessToken = req.cookies?.accessToken || req.headers?.authorization?.split(" ")[1];
  if (!accessToken || accessToken === "undefined") {
    throw new ApiError(401, "You are not logged in");
  }

  try {
    const decodedToken = jwt.verify(
      accessToken,
      process.env?.ACCESS_TOKEN_SECRET,
    );
    console.log("decoded: ", decodedToken);
    const user = await userModel.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }

    console.log(user);
    req.userId = user._id;
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    throw new ApiError(401, "Error while decoding access token", error);
  }
});

const isAuthenticated = (req, res, next) => {
  if (!req.userId) {
    throw new ApiError(401, "You are not logged in");
  }

  next();
};

export { authMiddleware, isAuthenticated };
