import "dotenv/config";
import app from "./src/app.js";
import http from "http";
import mongoose from "mongoose";

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
