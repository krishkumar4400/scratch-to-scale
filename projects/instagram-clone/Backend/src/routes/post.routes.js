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
const upload = require("../middleware/multer.middleware.js");

const postRouter = express.Router();

postRouter.post("/post", isAuthenticated, verifyAuthentication, upload.single("image"), createPost);
postRouter.get("/post", isAuthenticated, verifyAuthentication, getUserPosts);
postRouter.get(
  "/post/:postId",
  isAuthenticated,
  verifyAuthentication,
  getPostById,
);

module.exports = postRouter;
