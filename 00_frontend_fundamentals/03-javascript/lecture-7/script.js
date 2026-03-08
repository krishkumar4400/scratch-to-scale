/** Loops & Conditionals in Javascript
 * 
 *  - Understanding condition operator in javascript - ['if', 'else', if-else, else-if, ternary operator],
 *  - for loop in javascript
 *  - while loop in javascript 
 *  - do while in javascript
 *  - forEach in javascript
 *  - for in loop in javascript
 *  - for of loop in javascript
 *  - Recursion in javascript
 *  - loop control statements = [break, continue]
 * 
 */

// truthy and falsy values

// 0, "", false, NaN, null, undefined, document.all => falsy values

// otw -> truthy like number, string, etc.

switch(2) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    default:
        console.log("Default Case");
};

// loops: 
// repeat karna0.

/**
 * straightforward loops -> naa hi value badalti hai naa hi printing badalti hai
 * 
 * dynamic loop -> value badal sakti hai and printing bhi badal sakti hai.
 * 
 */

// 1. for loop 
// for(start; end; change) {}
for(let i=0; i<5; i++) {
    console.log("Krish");
}

