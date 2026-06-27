import 'dotenv/config';
import app from './src/app.js';
import http from 'http';
import connectToDB from './src/database/mongoDB.js';

const server = http.createServer(app);

const port = process.env.PORT || 4000;

await connectToDB();

server.listen(port, () => {
    console.log(`Server is up and running on http://localhost:${port}`);
});