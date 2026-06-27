const fs = require('fs'); // by this file system we perform stream operations

// Readable stream
const readableStream = fs.createReadStream('Example.txt', 'utf-8');
// console.log(readableStream);

readableStream.on('data', (chunk) => {
    console.log(chunk);
});

readableStream.on('end', () => {
    console.log("Finished reading file");
});

readableStream.on('error', (err) => {
    console.error("Error in reading file:\n", error);
});

/**
 * so,
 *  createReadStream() will help us to read file in chunks and also subscribe event like data,end,error, to read file efficiently.
 */

// Writable stream
const writableStream = fs.createWriteStream('output.txt');
writableStream.write("Hello, ");
writableStream.write('World');
writableStream.end();

writableStream.on('finish', () => {
    console.log("Finished writing to the file");
});