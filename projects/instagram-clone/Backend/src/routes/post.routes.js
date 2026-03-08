const express = require("express");
const {
  isAuthenticated,
  verifyAuthentication,
} = require("../middleware/auth.middleware.js");
const {
  createPost,
  getUserPosts,
  getPostById,
} = require("../controllers/post.controller.js");

const postRouter = express.Router();

postRouter.post("/post", isAuthenticated, verifyAuthentication, createPost);
postRouter.get("/post", isAuthenticated, verifyAuthentication, getUserPosts);
postRouter.get(
  "/post/:postId",
  isAuthenticated,
  verifyAuthentication,
  getPostById,
);

module.exports = postRouter;
