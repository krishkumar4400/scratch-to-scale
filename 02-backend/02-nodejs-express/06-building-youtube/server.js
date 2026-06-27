import 'dotenv/config';
import app from './src/app.js';
import http from 'http';
import connectToDB from './src/db/index.js';

const server = http.createServer(app);

await connectToDB();

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log(`Server is up and running on http://localhost:${port}`);
});