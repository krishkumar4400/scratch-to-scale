const { default: mongoose } = require("mongoose");

function connectToDB() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connect to Database");
  });
}

module.exports = connectToDB;