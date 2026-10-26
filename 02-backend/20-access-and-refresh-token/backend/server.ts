import "dotenv/config.js";
import http from "http";
import app from "./src/app.js";

const server = http.createServer(app);

if (!process.env.PORT) {
  throw new Error("Port is missing");
}

const port: string = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
