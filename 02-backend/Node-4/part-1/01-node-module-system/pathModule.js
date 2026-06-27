const path = require('path');

// path module provides utilities for working with file and directory path.

console.log("Directory Name - ", path.dirname(__filename)) // Directory Name -  C:\codes\02-web\01-js\MERN\03-Backend\Node.JS\Node-4\part-1\01-node-module-system

console.log("File name - ", path.basename(__filename))  // File name -  pathModule.js
console.log("FILE name - ", (__filename))  // FILE name -  C:\codes\02-web\01-js\MERN\03-Backend\Node.JS\Node-4\part-1\01-node-module-system\pathModule.js
console.log("DIR name - ", (__dirname))  // C:\codes\02-web\01-js\MERN\03-Backend\Node.JS\Node-4\part-1\01-node-module-system
console.log("FILE EXTENSION NAME - ", path.extname(__filename))  // FILE EXTENSION NAME -  .js
console.log(path.delimiter); // ;
console.log(path.isAbsolute(__filename)); // true
const joinedPath = path.join("/user", "/pc", "document", "node", "project", "Script.js");
console.log(joinedPath); // \user\pc\document\node\project\Script.js
const resolvedPath = path.resolve("user", "documents", "node", "projects");
console.log("resolvedPath = ", resolvedPath); // resolvedPath =  C:\codes\02-web\01-js\MERN\03-Backend\Node.JS\Node-4\part-1\01-node-module-system\user\documents\node\projects
const normalizedPath = path.normalize('/user/path/.documents./ppp../press//../node/projects/e.js'); // \user\path\.documents.\ppp..\node\projects\e.js
console.log(normalizedPath);

