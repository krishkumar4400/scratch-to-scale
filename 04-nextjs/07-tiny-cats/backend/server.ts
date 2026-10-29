import "dotenv/config";
import http from "http";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";

const server = http.createServer(app);

const port = process.env.PORT;

await connectToDB();

server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
