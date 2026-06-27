const http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("server is running"); 
});

const hostname = '127.0.0.1';

server.listen(8000, hostname, () => {
    console.log(`Server is up and running on: http://${hostname}:${8000}`); 
});
