import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    inStock: Boolean,
    tags: [String],
});

const Product = mongoose.model.product || mongoose.model('product', productSchema);

export default Product;