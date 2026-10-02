import "dotenv/config";
import app from "./src/app.js";
import { createServer } from "http";
import env from "./src/config/env.js";
import connectToDB from "./src/config/database.js";

const server = createServer(app);

const port = env.PORT || 5000;

await connectToDB();

server.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}`);
});
