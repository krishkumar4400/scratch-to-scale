// Handling large files

//  suppose we have the 10 gb of data and we have to perform operation on that data in that case we can use this readline and readable stream together to perform operation on the larger file. it will help us to manage the memory efficiently , faster processing and event driven that will help us to stream the data on the basis of the event.
const fs = require('fs');
const readline = require('readline'); //pre-build in node.js

const readableStream = fs.createReadStream('Example.txt');
const rl = readline.createInterface({input: readableStream});

rl.on('line', (line) => { // event will be called until the line is available
    console.log("Line: ", line);
});

rl.on('close', () => { //whenever we completely read file line by line this event will be called
    console.log("Finished Processing the file");
});