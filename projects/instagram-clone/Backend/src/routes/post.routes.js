const express = require('express');
const { isAuthenticated, verifyAuthentication } = require('../middleware/auth.middleware.js');
const { createPost } = require('../controllers/post.controller.js');


const postRouter = express.Router();

postRouter.post('/post', isAuthenticated, verifyAuthentication, createPost);

module.exports = postRouter;