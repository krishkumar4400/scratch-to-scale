const express = require('express');
const { userRegister, loginController, logoutController } = require('../controllers/auth.controller.js');

const authRouter = express.Router();

/**
 * Register route
 * POST /api/auth/register
 * req.body => name,email,password
 */
authRouter.post('/register', userRegister);

authRouter.post('/login', loginController)

authRouter.get('/logout', logoutController);

module.exports = authRouter;