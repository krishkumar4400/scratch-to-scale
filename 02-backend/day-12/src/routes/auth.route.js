const express = require('express');
const { register, login } = require('../controller/auth.controller.js');

const authRouter = express.Router();

authRouter.post('/register', register);

authRouter.post('/protected', (req,res) => {
    console.log(req.cookies); 
});

authRouter.post('/login', login)

module.exports = authRouter;