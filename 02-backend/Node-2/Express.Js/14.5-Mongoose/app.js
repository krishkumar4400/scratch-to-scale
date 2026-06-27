import express from 'express';
import mongoose from "mongoose";
import {MongoClient} from 'mongodb';

// step - 1: Connect to the mongoDB server
try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_database");
    console.log("Database connected Successfully");
    mongoose.set("debug", true); // it gives the output of the queries we applying in mongoose.
} catch (error) {
    console.error(error);
    process.exit();
}

// step - 2: create schema
const userSchema = new mongoose.Schema({
    // name:String
    name: {type:String, require:true},
    email: {type: String, require: true, unique: true},
    age: {type:Number, require:true, min:5, max:60},
    createdAt: {type: Date, default: Date.now()}, 
});

// creating a model
const userModel = mongoose.model('user', userSchema);


// inserting data inside collection:
await userModel.create({
    name: "krish kumar",
    email: "krishkumarbgp2022@gmail.com",
    age: 21 
});

await mongoose.connection.close();