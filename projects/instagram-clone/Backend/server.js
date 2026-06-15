require("dotenv").config();
const app = require("./src/app.js");
const http = require("http");
const connectToDB = require("./src/config/database.js");

const port = process.env.PORT || 8000;

connectToDB().catch((error) => console.error(error));

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
