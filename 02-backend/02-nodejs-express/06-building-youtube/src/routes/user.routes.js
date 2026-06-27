import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  getUserChannelProfile,
  getUserWatchHistory,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateCoverImage,
  updateUserAvatar,
} from "../controllers/user.controllers.js";

import {
  loginValidatorSchema,
  registerValidatorSchema,
} from "../validators/request.validators.js";

import { requestValidation } from "../middlewares/requestValidation.middlewares.js";

import { upload } from "../middlewares/multer.middlewares.js";

import {
  authMiddleware,
  isAuthenticated,
} from "../middlewares/auth.middlewares.js";

const userRouter = Router();

// unsecured routes
// register user
userRouter.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerValidatorSchema(),
  requestValidation,
  registerUser,
);

// login user
userRouter
  .route("/login")
  .post(loginValidatorSchema(), requestValidation, loginUser);

// refresh access token
userRouter.route("/refresh").post(refreshAccessToken);

//secured routes
// logout user
userRouter.route("/logout").post(authMiddleware, isAuthenticated, logoutUser);

// change current password
userRouter
  .route("/change-password")
  .post(authMiddleware, isAuthenticated, changeCurrentPassword);

// get current user
userRouter.route("/").get(authMiddleware, isAuthenticated, getCurrentUser);

// update account details
userRouter
  .route("/update-account")
  .patch(authMiddleware, isAuthenticated, updateAccountDetails);

// change avatar image
userRouter
  .route("/change-avatar")
  .patch(
    authMiddleware,
    isAuthenticated,
    upload.single("avatar"),
    updateUserAvatar,
  );

// change cover image
userRouter
  .route("/change-cover-image")
  .patch(
    authMiddleware,
    isAuthenticated,
    upload.single("coverImage"),
    updateCoverImage,
  );

// get user channel profile
userRouter
  .route("/channel-profile/:username")
  .get(authMiddleware, isAuthenticated, getUserChannelProfile);

userRouter
  .route("/watch-history")
  .get(authMiddleware, isAuthenticated, getUserWatchHistory);

export default userRouter;
