const http = require('http');

const server = http.createServer((req,res) => {
    // res.statusCode(300);
    // res.setHeader('Content-Type', 'text/plain')
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("Hello Node.JS");
});

const port = 3000;
server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
}); 