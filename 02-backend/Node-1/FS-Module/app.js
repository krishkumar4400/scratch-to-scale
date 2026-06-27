// // 1. file system(fs): by using file we can read, write, and delete the files and directory in our system     

const fs = require('fs');

// Read file
// fs.readFile('Example.txt', 'utf-8', (err,data) => {
//     if(err) {
//         return console.error(err);
//     }
//     return console.log(data);
// });

// Write file
// const content = 'Hello Node.Js';
// fs.writeFile('Example2.txt', content, (err) => {
//     if(err) {
//         return console.error(err);
//     } 
//     return console.log("Data written to the file successfully");
// });

// Read file sync
// const data = fs.readFileSync('Example2.txt', 'utf-8');
// console.log(data);

// Write file sync
const content = "Write file sync method executing"
const output = fs.writeFileSync('Example4.txt', content);
if(output) {
    return console.log("File created successfully");
}
return console.error("File creation failed");