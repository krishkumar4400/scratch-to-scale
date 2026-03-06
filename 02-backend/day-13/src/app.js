const express = require('express');
const cookieParser = require('cookie-parser');
const userModel = require('./Model/User.model.js');
const userRouter = require('./routes/user.route.js');
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", userRouter);

module.exports = app;