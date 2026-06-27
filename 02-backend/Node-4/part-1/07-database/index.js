import express from "express";
import mongoose, { Schema } from "mongoose";

const app = express();

// connect with mongo db
mongoose.connection.on('connected', () => console.log("database connected"));
await mongoose.connect(
    "mongodb+srv://krish:Krish9661@cluster0.qdrqtkr.mongodb.net/" + 'testDB'
);

// create schema
const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: {type: Date, default: Date.now()}
}, {
    timestamps: true 
});

// create user model
const User = mongoose.model("User", userSchema);

async function runQueryExample() {
    try {
        // create new collection
       const user = await User.create({
            name: 'krish kumar',
            email: 'krish@gmail.com',
            age: 21,
            isActive: true,
            tags: ['developer', 'engineer', 'SWE', 'SDE', 'ai specialist']
        });

        const newUser = new User({
          name: "krish kumar",
          email: "krish@gmail.com",
          age: 21,
          isActive: true,
          tags: ["developer", "engineer", "SWE", "SDE", "ai specialist"],
        });

        await newUser.save();

        console.log("new user created", user, newUser);

        const allUsers = await User.find({});
        console.log(allUsers);
    } catch (error) {
        console.log(error.message);
    } finally {
        mongoose.connection.close();
    }
}

// runQueryExample();

// const usersOfIsActive = await User.find({isActive: true});
// // console.log(usersOfIsActive);

// const userOfMail = await User.findOne({email: "krish@gmail.com"});
// // console.log(userOfMail);

// const getUserByid = await User.findById(userOfMail._id);
// // console.log(getUserByid);

// const selectedFields = await User.find().select('name email age -_id');
// // console.log(selectedFields);

// const limitedUsers = await User.find().limit(5).skip(5);
// // console.log(limitedUsers);

// // const sortedUser = await User.find().sort({age: -1});
// const sortedUser = await User.find().sort({age: 1});
// // console.log(sortedUser);

// const countDocuments = await User.countDocuments();
// console.log(countDocuments);

// const countIsActive = await User.countDocuments({isActive: false});
// console.log(countIsActive);

// const deletedUser = await User.findByIdAndDelete(newUser._id);
// console.log(deletedUser);

// const updatedUser = await User.findByIdAndUpdate(newUser._id, {
//     $set: {age: 200}, $push: {tags: 'updated'} 
// }, {new: true});

// console.log(updatedUser);



app.get("/", (req, res) => {
  res.send("hello express");
});

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
