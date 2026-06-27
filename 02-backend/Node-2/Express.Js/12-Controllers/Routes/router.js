import { Router } from "express";
import { sayHello } from "../Controllers/app.js";


const router = Router();

router.get('/', sayHello);

export default router;