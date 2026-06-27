// 2. HTTP: Allow us to create web server that can listen to client request and send the response

const http = require('http');
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello NodeJs Great");
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
})