const mongoose = require('mongoose');

function connectToDB() {
    try {
        mongoose.connect(process.env.MONGO_URI).then((res) => {
            console.log("Connected to database");
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectToDB;