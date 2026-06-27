// Third Party Modules:
    // NPM(Node Package Manager): it is default package manager of node.js. it allows us to install, update and delete modules or libraries.

// 1. Lodash: it is used to manage array or string efficiently. using this module we can perform many operations on array and strings.

/**
 * Package intallation command for development purpose only(we will use the flags): npm i nodemon --save-dev
 * Update command of a package: npm update package-name(eg: nodemon)
 * delete command for a package: npm uninstall nodemon
 * 
 * Package intallation command globally in our system: 
 */
const lodash = require('lodash');

const arr = [1,2,3,4,5];
console.log(arr);

const reversed = lodash.reverse(arr);

console.log(arr);
console.log(reversed);