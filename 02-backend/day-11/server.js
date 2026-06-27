require("dotenv/config");
const app = require("./src/app.js");
const connectToDatabase = require("./src/config/database.js");

const port = process.env.PORT || 8000;

connectToDatabase();

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
