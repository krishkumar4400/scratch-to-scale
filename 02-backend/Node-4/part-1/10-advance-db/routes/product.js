import { Router } from "express";
import { getProductStats, insertSampleProducts } from "../controllers/product.js";

const productRouter = Router();

productRouter.post('/products', insertSampleProducts);
productRouter.get('/stats', getProductStats);

export default productRouter;