import mongoose from "mongoose";
import env from "../config/env.js";

const connectToDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectToDB;
