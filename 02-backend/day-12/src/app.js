const cookieParser = require('cookie-parser');
const express = require('express');
const authRouter = require('./routes/auth.route.js');

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter);

module.exports = app;