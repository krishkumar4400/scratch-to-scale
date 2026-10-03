require('dotenv').config();
const app = require('./src/app.js');
const connectToDB = require('./src/config/database.js');


connectToDB();

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server is running on port 3000"); 
});
