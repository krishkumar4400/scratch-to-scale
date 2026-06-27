import { Router } from "express";
import { updateRoleToEducator } from "../Controllers/educatorController.js";
import { requireAuth } from "@clerk/express";

const educatorRouter = Router();

// Add Educator Role
educatorRouter.get('/update-role', requireAuth(), updateRoleToEducator);

export default educatorRouter;
