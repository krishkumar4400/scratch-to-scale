import { Router } from "express";
import upload from "../configs/multer.js";
import { getAllImages, uploadImage } from "../controllers/image.js";
import isAuth from "../middleware/auth.js";
import isAdmin from "../middleware/isAdmin.js";

const router = Router();

// upload image
router.post('/upload', isAuth, isAdmin, upload.single('image'), uploadImage);

// get all images
router.get('/images', getAllImages);

export default router;