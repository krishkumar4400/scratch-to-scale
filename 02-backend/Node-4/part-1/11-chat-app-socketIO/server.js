import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

// initiate our socket io and then attack this initiation to the http server
const io = new Server(server);

app.use(express.static("public"));

const users = new Set();

io.on("connection", (socket) => {
  console.log("A user has been connected");

  // handle user when they will join the chat
  socket.on("join", (userName) => {
    users.add(userName);
    socket.userName = userName;

    // broadcast to all clients/users that a new user has joined
    io.emit("userJoined", userName);

    // send the updated user list to all clients
    io.emit("userList", Array.from(users));
  });

  // handle incoming chat message
  socket.on("chatMessage", (message) => {
    // broadcast the received message to all connected clients
    io.emit("chatMessage", message);
  });

  // handle user disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
    // ideally map socket.id → username

    users.forEach((user) => {
      if (user === socket.userName) {
        users.delete(user);

        io.emit("userLeft", user);

        io.emit('userList', Array.from(users));
      }
    });
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
