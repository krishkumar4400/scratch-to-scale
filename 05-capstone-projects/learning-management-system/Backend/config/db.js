import mongoose from "mongoose";

// connect to the mongodb database
export default async function connectDB () {
    try {
        mongoose.connection.on('connected', ()=>console.log("mongo db connected"));
        await mongoose.connect(`${process.env.MONGO_URI}/lms`);
    } catch (error) {
        console.log(error.message);
    }
}
