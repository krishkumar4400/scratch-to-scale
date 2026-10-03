const express = require('express');
const { register } = require('../controller/auth.controller.js');


const authRouter = express.Router();

authRouter.post('/register', register);


module.exports = authRouter;