import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String
});

const Auhtor = mongoose.model("author", authorSchema);

export default Auhtor;