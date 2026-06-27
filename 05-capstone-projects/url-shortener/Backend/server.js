import 'dotenv/config';
import http from 'http';
import connectDB from './Configs/database.js';
import app from './app.js';

const server = http.createServer(app);

const port = process.env.PORT || 4000;

await connectDB();

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`); 
});
