// import express from 'express';
// import mongoose from 'mongoose';

// try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_middleware");
//     mongoose.set("debug",true);
//     console.log("Database connected successfully");
// } catch (error) {
//     console.error("Error: ", error);
//     process.exit(); 
// }

// const userSchema = mongoose.Schema({
//     name: {type: String, require:true},
//     email: {type:String, require: true, unique: true},
//     age: {type: Number, min:10, max: 50},
//     createdAt: {type:Date, default: Date.now()},
//     updatedAt: {type: Date, default: Date.now()}
// });

// //we will use middleware
// userSchema.pre(["save", "updateOne", "updateMany", "findOneAndUpdate"], function(next) {
//     this.set({updatedAt: Date.now()}); 

//     //we can also use individual method
//     this.updateOne({email: "krish@gmail.com"}, {$set: {updatedAt: Date.now}});
//     next();
// });

// const User = mongoose.model('user', userSchema);

// // await User.create([
// //   { name: "krish", email: "krishkumarbgp2022@gmail.com", age: 20 },
// //   { name: "ravi", email: "ravi2022@gmail.com", age: 22 },
// //   { name: "akash", email: "akash@gmail.com", age: 20 },
// //   { name: "aman", email: "aman2022@gmail.com", age: 20 },
// //   { name: "rahul", email: "rahul2022@gmail.com", age: 20 },
// //   { name: "abhinash", email: "abhinash2022@gmail.com", age: 20 },
// // ]);


// await User.updateOne(
//   { email: "krishkumarbgp2022@gmail.com" },
//   { $set: { age: 50 } }
// );

// // await User.save(); // used if we create  a user 

// await mongoose.connection.close();



// // // Without using middleware
import mongoose from 'mongoose';

try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_middleware2");
    mongoose.set();
    console.log("Database conencted successfully");
} catch (error) {
    console.error("Error: ", error);
    process.close("debug", true);
}

const userSchema = new mongoose.Schema({
    name: {type: String, require:true},
    email: {type: String, require:true, unique: true},
    age: {type: Number, require:true}
}, {
    timestamps: true
});

const User = mongoose.model("user", userSchema);

// await User.create([
//   { name: "krish", email: "krishkumarbgp2022@gmail.com", age: 20 },
//   { name: "ravi", email: "ravi2022@gmail.com", age: 22 },
//   { name: "akash", email: "akash@gmail.com", age: 20 },
//   { name: "aman", email: "aman2022@gmail.com", age: 20 },
//   { name: "rahul", email: "rahul2022@gmail.com", age: 20 },
//   { name: "abhinash", email: "abhinash2022@gmail.com", age: 20 },
// ]);

await User.updateOne({ email: "krishkumarbgp2022@gmail.com" }, {age: 33});

await mongoose.connection.close();