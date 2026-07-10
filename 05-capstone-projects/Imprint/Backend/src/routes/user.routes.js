const { Router } = require("express");
const { followUser } = require("../controllers/user.controller.js");
const {
  authenticationMiddleware,
  isAuthenticated,
} = require("../middleware/auth.middleware.js");

const userRouter = Router();

userRouter.post(
  "/:userId",
  authenticationMiddleware,
  isAuthenticated,
  followUser,
);

module.exports = userRouter;
