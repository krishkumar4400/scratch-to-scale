import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    throw new Error("Mongo DB URL not found");
}

let isConnected = false;

const connectToDB = async () => {
    try {
        const db = await mongoose.connect(mongoUri);
        console.log("Mongo DB connected successfully 🟢");
        db.connections[0].readyState === 1;
        console.log(db.STATES.connected); // 1
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectToDB;