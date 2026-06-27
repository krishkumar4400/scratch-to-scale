const fs = require('fs');
const path = require('path');

/**
 * fs.writeFileSync(): Writes data to a file. If the file does not exist, it will be created . If the file exists, it overwrites the content.
 * 
 * syntax: fs.writeFileSync(filepath, data, options);
 * 
 * filePath: the file path to write to.
 * 
 * data: the content to write to the file
 * 
 * options: Optional. Includes encoding(utf-8), mode, or flags.
 */

fs.readFile('test.txt', 'utf-8', (err,data) => {
    if(err) {
        return console.error(`Error occured while reading file: ${err}`);
    }
    console.log(data);
});

// Synchronous:

// const data = fs.readFileSync('test.txt', 'utf8');
// console.log(data, "sdfeg")

// utf-8: short for "8-bit unicode transformation format" encodes character from nearly all written languages, symbols, and emojis. 

const fileName = 'test1.txt';

const writeFile = fs.writeFileSync(fileName, "This is the iinitial data");
console.log(writeFile);


const fileName = 'test2.txt';
const filePath = path.join(__dirname, fileName);
console.log(filePath);//C:\codes\MERN\Backend\Node.JS\Node-2\FS-Module\test2.txt

fs.writeFileSync(filePath, "This is a data", 'utf8');
console.log("Data written to the file successfully"); //Data written to the file successfully


/**
 * fs.readFileSync(): Reads a file's content and returns it as a string or buffer.
 * Syntax: const data = fs.readFileSync(filePath, options);
 * filePath: path of the file to read
 * options: optional Encoding ('utf8') to get data as a string.
 * 
 */

const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);
const data = fs.readFileSync(filePath);
// Use .toString() if working with binary data (Buffer): for example, if you need both the raw binary data and its string representation.

const data = fs.readFileSync(filePath, 'utf8');
console.log("Data = ", data.toString()); // Data =  This is the iinitial data
console.log("Data = ", data); // Data =  This is the iinitial data


/**
 * fs.appendFileSync(): Appends data to a file. If the file does not exist, it creates the file. 
 * 
 * syntax: fs.appendFileSync(filePath,data,options);
 * 
 * data: content to add to the file.
 * 
 * options: optional. Encoding options('utf8')
 * 
 */

const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

fs.appendFileSync(filePath, "\nThis is the data to be append to the file");
console.log("Data appended to the file successfully");

/**
 * Delete file (fs.unlinkSync()): Deletes a file by its path.
 * syntax: fs.unlinkSync(filePath);
 * filePath: The path of the file to delete.
 */

const fileName = 'test1.txt';
const filePath = path.join(__dirname, fileName);

fs.unlinkSync(filePath);
console.log("File deleted successfully");


/**
 * Rename File(fs.renameSync): Renames a file from one name to another.
 * 
 * Syntax: fs.renameSync(oldPath, newPath);
 * 
 * oldPath: curretn file path
 * 
 * newPath: new file path or name.
 */

const fileName = 'exmaple.txt';
const filePath = path.join(__dirname, fileName);
const newFilePath = path.join(__dirname, "text.js"); 

fs.renameSync(filePath, "exmaple.txt");
fs.renameSync(filePath, newFilePath);
console.log("File Renamed successfully");


// Asynchronous

// Read File
/** fs.readFile(): Reads the contents of a file asynchronously and returns the data as a buffer or string.
 * 
 * Syntax: fs.readFile(path, options. callback);
 * 
 * path: file path to read from.
 * 
 * options: Optional. An object or string specifying the encoding ('utf8') or flag ('r' for reading).
 * 
 * callback: A function with parameters (err, data).
 * 
 */
fs.readFile("example.txt", 'utf8', (err, data) => {
    if(err) {
        return console.error("Error while reading the file: ", err);
    }
    console.log(data);
});

// Write File
/**
 * fs.writeFile(): Writes data to a file, replacing the file if it already exists.
 * 
 * syntax: fs.writeFile(path, data, options, callBack)
 * 
 * path: File path to write to
 * 
 * data: content to write
 * 
 * options: optional. specifies encoding ('utf8'), mode, or flag.
 * 
 * callback: A functionwith an err parameter
 */

fs.writeFile('example2.txt', 'This is the example data', (err) => {
    if(err) {
        return console.log("Error while writing the file: ", err);
    }
    console.log("Data written to the file successfully");
});


// data append to the file:
fs.appendFile("example.txt", "\nThis data is appended to this file", (err) => {
    if(err) {
        return console.error("Error while Data appending to the file: ", err);
    }
    console.log("Data appended to the file successfully");
});


// Rename file
fs.rename("example.txt", "test.js", (err) => {
    if(err) {
        return console.error("Error while renaming the file: ", err);
    }
    console.log("File renamed successfully");
});


// delete the file
const fileName = "test.js";
const filePath = path.join(__dirname, fileName);

fs.unlink(filePath, (err) => {
    if(err) {
        return console.error("Error while deleting the file: ", err);
    }
    console.log("File deleted successfully");
});