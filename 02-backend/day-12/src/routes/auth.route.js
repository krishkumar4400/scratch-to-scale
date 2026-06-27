const express = require('express');
const { register, login, logout } = require('../controller/auth.controller.js');

const authRouter = express.Router();

authRouter.post('/register', register);

authRouter.post('/protected', (req,res) => {
    console.log(req.cookies); 
});

authRouter.post('/login', login)

authRouter.get('/logout', logout);

module.exports = authRouter;