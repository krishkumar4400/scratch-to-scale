import mongoose from "mongoose";

async function connectToDB() {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongo DB : ", connectionInstance.connection.host);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connectToDB;
