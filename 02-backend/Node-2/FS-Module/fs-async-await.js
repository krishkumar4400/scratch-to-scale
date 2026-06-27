const fs = require('fs/promises');
const path = require('path');

const fileName = "files.txt";
const filePath = path.join(__dirname, fileName);
const content = "This is the file content";

const listDirectory = async() => {
    try {
        const files = await fs.readdir(__dirname);
        console.log(files);
    } catch (error) {
        console.error(error);
    }
}
listDirectory();
/**
 * [
  'app.js',
  'example.txt',
  'example2.txt',
  'files.txt',
  'fs-async-await.js',
  'fsPromises.js',
  'newFile.py',
  'text.js'
]
 */

/**
 * fsPromises.writeFile(): Writes data to a file asynchronously. If the file exists, it overwrites the content. 
 * Syntax: fsPromises.writeFile(path, data, options);
 * 
 * path: The file path to write to.
 * data: The content to write to the file.
 * options: optional. specifies encoding(e.g., utf8), mode or flag.
 */
const writeDirectory = async () => {
    try {
        await fs.writeFile(filePath, content, 'utf-8');
        console.log("Data writtent to the file");
    } catch (error) {
        console.error("Errro while writing the file");
    }
}

// writeDirectory();
// Data writtent to the file


const readDirectory = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
readDirectory(); // This is the file content

const appendContent = async () => {
    try {
        await fs.appendFile(filePath, "\nthis is new updated content");
        console.log("Data appended to the file succesfully");
    } catch (error) {
        console.error(error);
    }
}
appendContent();

const renameFile = async () => {
    try {
        await fs.rename(filePath, "newFiles.TXT");
        console.log("File Renamed Successfully");
    } catch (error) {
        console.error(error);
    }
}

// renameFile();

const deleteFile = async () => {
    try {
        await fs.unlink("newFiles.TXT");
        console.log("File deleted successfully");
    } catch (error) {
        console.error(error);
    }
}
deleteFile();