import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  if (req.url === "/") {
    res.end("Welcome to the Home Page");
  } else if (req.url === "/projects") {
    res.end("Welcome to the projects page");
  } else {
    res.end("This page cannot be found");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
