/**
 * Why .then() and .catch() ? 
 *  .then() ensures clear chaning of multiple asynchronous operations.
 *  .catch() centralizes error handling, making it easy to debug and manage failures.
 * 
 */

// const fs = require('fs');
// const path = require('path');

// const file = __dirname;

// fs.promises.readdir(file).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.error(error);
// });

//[ 'app.js', 'example.txt', 'example2.txt', 'fsPromises.js', 'text.js' ]


/**
 * syntax: fs.promises.writeFile(path,data,options).then().catch();
 * 
 * path: path to the file
 * data: content to write
 * options: Encoding ('utf8'), flags, etc. (opptional).
 */
// const fs = require('fs');
const path = require('path');

// !Are you tired of using fs.promises everytime ? 
//You can actually just import with fs/promises
//const fs = require("fs/promises").
// Now , You don't need to use fs.promises everytime.
const fs = require('fs/promises');

const fileName = 'file1.txt';
const filePath = path.join(__dirname, fileName);

fs.promises.writeFile(filePath, "This is the initial data", 'utf8').then((res) => {
    console.log("Data written to the file",res);
}).catch((error) => {
    console.error(error);
});


/**
 * Read(read a file): readFile()
 * The readFile() method reads data from a file.
 * 
 * It can return the data as a Buffer or string based on the encoding provided.
 * 
 * Syntax: fs.promises.readFile(path, options).then(data => ...).catch(err=> ...);
 * 
 * path: path to the file.
 * options: Encoding ('utf8') or no encoding for binary data.
 */

fs.promises.readFile(filePath, 'utf8').then((data) => {
    console.log(data);
}).catch(err => console.log(err));


/**
 * append file: 
 *      syntax: fs.promises.appendFile(path, data,options).then().catch();
 * 
 * path: path to the file
 * 
 * data: content to append
 * 
 * options: Encoding('utf8') or no encoding for binary data.
 */

fs.promises.appendFile(filePath, "\nThis is the new data", 'utf-8').then(() => {
    console.log("Data appended to the file");
}).catch((error) => {
    console.error(error);
});


/**
 * Delete file:
 * Delete(Remove a file): unlink()
 * Deletes a file from the filesystem.
 * The unlink() Method removes the specified file asynchronously.
 * 
 * Syntax: fs.promises.unlink(path).then().catch();
 * path: Path to the file.
 */

fs.promises.unlink(filePath).then(() => {
    console.log("File deleted successfully");
}).catch((error) => {
    console.error(error);
});

fs.rename(filePath, "newFile.py").then(() => {
    console.log("File renamed successfully");
}).catch((error) => {
    console.error(error);
});