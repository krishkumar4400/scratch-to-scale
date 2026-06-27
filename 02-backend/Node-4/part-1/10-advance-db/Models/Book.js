import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: mongoose.Schema.Types.ObjectId,
  ref: "author",
});

const Auhtor = mongoose.model("book", bookSchema);

export default Auhtor;
