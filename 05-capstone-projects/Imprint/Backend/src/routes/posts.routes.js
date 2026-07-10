const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByUserId,
} = require("../controllers/posts.controllers.js");
const {
  authenticationMiddleware,
  isAuthenticated,
} = require("../middleware/auth.middleware.js");
const upload = require("../middleware/multer.middleware.js");




const postRouter = express.Router();

// protected routes
/**
 * Create post
 * POST /api/v1/posts/
 * req.body = {media, caption}
 */
postRouter.post(
  "/",
  authenticationMiddleware,
  isAuthenticated,
  upload.single("media"),
  createPost,
);

/**
 * Get all post
 * GET /api/v1/posts/
 * req.body = {}
 */
postRouter.get("/", authenticationMiddleware, isAuthenticated, getAllPosts);

/**
 * Get post by id
 * GET /api/v1/posts/postId
 * req.body = {}
 */
postRouter.get(
  "/all",
  authenticationMiddleware,
  isAuthenticated,
  getPostsByUserId,
);

/**
 * Get post by id
 * GET /api/v1/posts/postId
 * req.body = {}
 */
postRouter.get(
  "/:postId",
  authenticationMiddleware,
  isAuthenticated,
  getPostById,
);

module.exports = postRouter;
