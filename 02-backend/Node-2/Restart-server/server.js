const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-type": 'text/html'});
    res.write("<h1>Hey i am a Node Server and how are you are you fine ?? ?~</h1>");
    res.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`); 
});