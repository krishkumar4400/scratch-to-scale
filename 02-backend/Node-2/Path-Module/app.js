const path = require('path');

console.log(__dirname); //C:\codes\MERN\Backend\Node.JS\Node-2\Path-Module
console.log(__filename); //C:\codes\MERN\Backend\Node.JS\Node-2\Path-Module\app.js

const filePath = path.join('folder', 'students', 'data.txt');
console.log(filePath); //folder\students\data.txt

const parsedData = path.parse(filePath);
const resolvedData = path.resolve(filePath);
const extName = path.extname(filePath);
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);

console.log( {
    parsedData,
    resolvedData,
    extName,
    baseName,
    dirName
});

console.log(path.sep); // \

/**
 *   {
  parsedData: {
    root: '',
    dir: 'folder\\students',
    base: 'data.txt',
    ext: '.txt',
    name: 'data'
  },
  resolvedData: 'C:\\codes\\MERN\\Backend\\Node.JS\\Node-2\\Path-Module\\folder\\students\\data.txt',  
  extName: '.txt',
  baseName: 'data.txt',
  dirName: 'folder\\students'
}

in the simple print using console.log we can see \ single backward slash because here escape character is working but if we print object or pass object using console.log() then it print as it it \\ because here json.stringify works and it is not actually json but it look a like json internally behave json.

 */