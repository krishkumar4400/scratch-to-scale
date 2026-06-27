// 3. Path: help us to work with file, directory in a way that is compatible across different operating systems.

const path = require('path');

const directory = '/user/local';
const filename = 'example.txt';

const fullPath = path.join(directory,filename);

console.log(fullPath); // \user\local\example.txt