import userModel from "../models/user.models.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../config/cloudinary.js";
import blacklistedTokenModel from "../models/blacklistedTokens.models.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

async function generateAccessAndRefreshToken(user) {
  try {
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.error(error);
    throw new ApiError(
      400,
      "Something went wrong while generating access and refresh tokens",
      error,
    );
  }
}

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "development" ? "strict" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, username, email, password } = req.body;

  console.log(req.files);
  const avatarLocalPath = req.files?.avatar[0]?.path;
  let coverImageLocalPath = "";
  if (req.files.coverImage) {
    coverImageLocalPath = req.files?.coverImage[0]?.path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }

  let user = await userModel.findOne({ $or: [{ email }, { username }] });
  if (user) {
    throw new ApiError(
      409,
      "User already exists with this username or email address",
    );
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  let coverImage = "";
  if (coverImageLocalPath) {
    coverImage = await uploadOnCloudinary(coverImageLocalPath);
  }

  if (!avatar || !avatar.url) {
    throw new ApiError(500, "Avatar upload failed");
  }

  try {
    user = await userModel.create({
      email,
      password,
      username,
      fullname,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
    });

    const createdUser = await userModel.findById(user._id);

    if (!createdUser) {
      throw new ApiError(400, "User creation failed due to server error");
    }

    const { accessToken, refreshToken } =
      await generateAccessAndRefreshToken(createdUser);

    return res
      .status(201)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json(new ApiResponse(201, createdUser, "user registered successfully"));
  } catch (error) {
    console.error(error);
    if (avatar) {
      await deleteFromCloudinary(avatar.public_id);
    }
    if (coverImage) {
      await deleteFromCloudinary(coverImage.public_id);
    }
    throw new ApiError(
      500,
      "Something went wrong while registering a user and images were deleted",
    );
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    throw new ApiError(401, "Incorrect email or password");
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    throw new ApiError(401, "Incorrect email or password");
  }

  const { accessToken, refreshToken } =
    await generateAccessAndRefreshToken(user);
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user, accessToken, refreshToken },
        "user logged in successfully",
      ),
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await userModel.findByIdAndUpdate(
    req.userId,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    },
  );

  const accessToken =
    req.cookies.accessToken || req.headers?.authorization?.split(" ")[1];

  await blacklistedTokenModel.create({
    token: accessToken,
  });

  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponse(200, {}, "You are logged out"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  console.log(req.cookies);
  const incomingRefreshToken =
    req.cookies?.refreshToken || req.body?.refreshToken;

  if (!incomingRefreshToken || incomingRefreshToken === "undefined") {
    throw new ApiError(401, "Refresh token is required");
  }

  try {
    const decoded = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );
    console.log(decoded);
    const user = await userModel.findById(decoded?._id);
    console.log(user);
    if (!user) {
      throw new ApiError(401, "Invalid Refresh Token");
    }
    if (!(incomingRefreshToken !== user?.refreshToken)) {
      throw new ApiError(401, "Invalid Refresh Token");
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await generateAccessAndRefreshToken(user);

    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", newRefreshToken, cookieOptions)
      .json(
        new ApiResponse(
          200,
          {
            user,
            accessToken,
            refreshToken: newRefreshToken,
          },
          "Access token refreshed successfully",
        ),
      );
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Error while decoding refresh token", error);
  }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const userId = req.userId;

  const { oldPassword, newPassword } = req.body;

  const user = await userModel.findById(userId).select("+password");

  const isPasswordMatch = await user.comparePassword(oldPassword);

  if (!isPasswordMatch) {
    throw new ApiError(401, "Old password is incorrect");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new ApiResponse(200, { user: req.user }, "User fetched successfully"),
    );
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const { email, fullname, username } = req.body;
  const user = await userModel
    .findByIdAndUpdate(req?.userId, req.body, {
      new: true,
    })
    .select(
      "-password -refreshToken -emailVerificationToken -emailVerificationToken -resetPasswordToken -resetPasswordTokenExpiry",
    );

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"));
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  if (!req.file.avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatarLocalPath = req?.file?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar || !avatar.url) {
    throw new ApiError(400, "Something when wrong while uploading avatar");
  }

  let user = await userModel
    .findByIdAndUpdate(
      req?.userId,
      {
        $set: {
          avatar: avatar.url,
        },
      },
      {
        new: true,
      },
    )
    .select(
      "-password -refreshToken -emailVerificationToken -emailVerificationToken -resetPasswordToken -resetPasswordTokenExpiry",
    );
  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar updated successfully"));
});

const updateCoverImage = asyncHandler(async (req, res) => {
  if (!req.file.coverImage) {
    throw new ApiError(400, "Cover image is required");
  }
  const coverImageLocalPath = req?.file?.path;
  if (!coverImageLocalPath) {
    throw new ApiError(400, "Cover image is required");
  }

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!coverImage || !coverImage.url) {
    throw new ApiError(400, "Something went wrong while uploading cover image");
  }

  const user = await userModel.findByIdAndUpdate(
    req.userId,
    {
      $set: {
        coverImage: coverImage.url,
      },
    },
    {
      new: true,
    },
  );

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Cover image updated successfully"));
});

const getUserChannelProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (!username?.trim()) {
    throw new ApiError(400, "Username is required");
  }
  const channel = await userModel.aggregate([
    {
      $match: {
        username: username?.toLowerCase(),
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "channel",
        as: "subscribers",
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "subscriber",
        as: "subscribedTo",
      },
    },
    {
      $addFields: {
        subscribersCount: {
          $size: "$subscribers",
        },
        channelsSubscribedToCount: {
          $size: "$subscribedTo",
        },
        isSubscribed: {
          $cond: {
            if: {
              $in: [req?.userId, "$subscribers.subscriber"],
            },
            then: true,
            else: false,
          },
        },
      },
    },
    {
      // project only the necessary data
      $project: {
        fullname: 1,
        username: 1,
        email: 1,
        avatar: 1,
        coverImage: 1,
        subscribersCount: 1,
        channelsSubscribedToCount: 1,
        isSubscribed: 1,
      },
    },
  ]);
  console.log(channel);
  if (!channel) {
    throw new ApiError(404, "Channel not found");
  }

  return res
    .status(400)
    .json(
      new ApiResponse(400, channel[0], "Channel details fetched successfully"),
    );
});

const getUserWatchHistory = asyncHandler(async (req, res) => {
  const user = await userModel.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req?.userId),
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "watchHistory",
        foreignField: "_id",
        as: "watchHistory",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              pipeline: [
                {
                  $project: {
                    fullname: 1,
                    username: 1,
                    avatar: 1,
                  },
                },
              ],
            },
          },
          {
            $addFields: {
              owner: {
                $first: "$owner",
              },
            },
          },
        ],
      },
    },
    {},
  ]);

  console.log(user);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        user[0]?.watchHistory,
        "Watch history fetched successfully",
      ),
    );
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateCoverImage,
  updateUserAvatar,
  getUserChannelProfile,
  getUserWatchHistory,
};
