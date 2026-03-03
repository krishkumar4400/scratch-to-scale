const app = require('./src/app.js');
const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(
      "mongodb+srv://krishkumarbgp2022_db_user:pn4b0twXxP3ycOoy@cluster2.vjxvrmq.mongodb.net/testDB"
    ).then(() => {
        console.log("Connect to Database"); 
    });
}

connectToDB();

app.listen(3000, () => {
    console.log("server is running on port 3000"); 
});