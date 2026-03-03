require('dotenv').config();
const app = require('./src/app.js');
const mongoose = require('mongoose');
const connectToDB = require('./src/config/database.js');



connectToDB();



const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("server is running on port 3000"); 
});