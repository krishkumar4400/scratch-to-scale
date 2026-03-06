const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth.routes.js');

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// auth router 
app.use('/api/auth', authRouter);

module.exports = app;  