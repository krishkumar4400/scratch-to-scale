// const add = require('./math');

// console.log(add(10,10));
// //common js

/**
 * Module.exports is a single object or value. When you reassign module.exports (e.g, module.exports = add), it completely replaces whatever was previously assigned.
 * If you reassign it again (module.exports = mult), the previous value (add) is replaced with mult.
 */

// const {add,substract,multiply,divide} = require('./math');
// or 
const maths =  require('./math');
console.log(maths.add(2,3));
console.log(maths.substract(2,3));
console.log(maths.multiply(2,3));
console.log(maths.divide(2,3));