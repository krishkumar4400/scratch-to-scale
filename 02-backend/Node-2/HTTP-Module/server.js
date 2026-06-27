const http = require('http');

// const server = http.createServer((req,res) => {
//     if(req.url === "/") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.write("Welcome to home page");
//         res.end();
//     } else {
//         res.statusCode = 404;
//         res.setHeader("Content-Type", "text/plain");
//         res.write("Invalid url");
//         res.end();
//     }
// });


const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('......');
    } else if(req.url === '/about') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Hey this is the about page</h1>");
        res.end();
    } else {
        res.statusCode = 404
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>URL is not working </h1>");
        res.end();
    }
})

const port = 4000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});