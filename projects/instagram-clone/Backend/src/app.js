const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth.routes.js');
const postRouter = require('./routes/post.routes.js');

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// auth router 
app.use('/api/auth', authRouter);

// post router
app.use('/api/posts', postRouter);

module.exports = app;  