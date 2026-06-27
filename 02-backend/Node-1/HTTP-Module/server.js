const http = require('http');
const url = require('url');

// // Handling get requests
// const server = http.createServer((req,res) => {
//     if(req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, {'content-type': 'text/plain'});
//         res.end("Welcome to Homepage");
//     } else {
//         res.writeHead(404, {'content-type': 'text/plain'});
//         res.end("Page Not Found");
//     }
// });

// //Handling POST requests:
// const server = http.createServer((req,res) => {
//     if(req.method === 'POST' && req.url === '/submit'){
//         let body = '';
//         req.on('data', (chunk) => {
//             body += chunk.toString();
//         });
//         req.on('end', () => {
//             res.writeHead(200, {'content-type':'application/json'});
//             res.end(JSON.stringify({Message: "Data Received", data: body}));
//         });
//     } else {
//         res.writeHead(404, {'content-type': 'text/plain'});
//         res.end('Route Not Found');
//     }
// });

const server = http.createServer((req,res) => {
    if(req.method === 'GET' && req.url.startsWith('/search')) {
        const queryObject = url.parse(req.url, true).query;
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({message: 'Query Received', queryObject}));
    } else {
        res.writeHead(404, {"content-type": 'text/plain',
             'custom-header': 'node js server',
             'header-2': "1234"
            });
        res.end("Route Not Found");
    }
});


const port = 4000;
server.listen(port, () => {
    console.log(`Server is Listening on http://localhost:${port}`);
});
