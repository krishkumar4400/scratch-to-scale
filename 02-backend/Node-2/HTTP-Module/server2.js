const http  = require('http');

const server = http.createServer((req,res) => {
    res.end("Hello Node.js how are you");
});

const port = 3000;

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});

// terminal on nodemon ??
