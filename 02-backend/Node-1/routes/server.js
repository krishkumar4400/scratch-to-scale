const http = require('http');
const url = require('url');

// Route Handler
const routes = {
    '/': (req,res) => {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Welcome to Homepage");
    },
    '/about': (req,res) => {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Welcome to About Page");
    },
    '/not-found': (req,res) => {
        res.writeHead(404, {'content-type': 'text/palin'});
        res.end("Page Not Found");
    }
}

// const server = http.createServer((req,res) => {
//     const {pathname} = url.parse(req.url);
//     if(routes[pathname]) {
//         routes[pathname](req,res);
//     } else {
//         routes['/not-found'](req,res);
//     }
// });

// // Handling Dynamic Routes
// const server = http.createServer((req,res) => {
//     const {pathname} = url.parse(req.url);
//     console.log(pathname);

//     if(pathname.startsWith('/user/')) {
//         const userId = pathname.split('/')[2];
//         res.writeHead(200, {'content-type': 'text/plain'});
//         res.end(`User Id: ${userId}`);
//     } else {
//         res.writeHead(404, {'content-type': 'text/plain'});
//         res.end('Route Not Found');
//     }
// });

// Middlewares:
//Middkeware function for logging requests
// function logRequest(req,res,next) {
//     console.log(`${req.method} request made to ${req.url}`);
//     next(req,res);
// }

// const server = http.createServer((req,res) => {
//     logRequest(req,res, (req,res) => {
//         const {pathname} = url.parse(req.url);
//         if(pathname.startsWith('/user/')) {
//             const userId = pathname.split('/')[2];
//             res.writeHead(200, {'content-type': 'text/plain'});
//             res.end(`User Id: ${userId}`);
//         } else {
//             res.writeHead(404, {'content-type': 'text/plain'});
//             res.end("URL Not Found");
//         }
//     });
// });

// handling url encoded data:
const queryString = require('querystring'); // to parse the form data
const server = http.createServer((req,res) => {
    if(req.method === 'POST' && req.url === '/submit') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
            console.log("Chunk = ", chunk);
            console.log("Data = ",data);
        });
        req.on('end', () => {
            const parsedData = queryString.parse(data);
            console.log("ParsedData = ", parsedData);
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify({
                message: "Form Data Received",
                parsedData 
            }));
        });
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end("Route Not Found");
    }
});

const port = 4000;
server.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
});