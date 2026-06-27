import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("Mongo DB connected successfully"));
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "usersData"
        });
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDB;