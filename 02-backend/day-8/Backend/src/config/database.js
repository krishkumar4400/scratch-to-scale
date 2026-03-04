const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Data is connected");
  });
}

module.exports = connectToDB;
