import {Router} from 'express';
import * as authControllers from '../Controllers/auth.controller.js';

const router = Router();

// router.get("/register", authControllers.getRegisterPage);
// router.get('/login', authControllers.getLoginPage);

// Another Way of writing routes:
router.route('/login').get(authControllers.getLoginPage).post(authControllers.postLogin);

export const authRouter = router;