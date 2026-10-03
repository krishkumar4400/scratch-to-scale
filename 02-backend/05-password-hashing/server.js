require('dotenv').config();
const app = require('./src/app.js');
const connectToDB = require('./src/config/database.js');

const port = process.env.PORT || 8000;

connectToDB();

app.listen(port, () => {
    console.log("Server is running on port ", port); 
});