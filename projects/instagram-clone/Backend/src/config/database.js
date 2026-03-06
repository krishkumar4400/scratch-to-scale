const mongoose = require("mongoose");

async function connectToDB() {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to Database");
    });

    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectToDB;
