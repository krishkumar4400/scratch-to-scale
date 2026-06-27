// default import - export
// import mult from "./math.js";

// import { div, mult, rem } from "./math.js";

// console.log(mult(3,08)); //Decimals with leading zeros are not allowed in strict mode.
// console.log(mult(3,8)); 
// console.log(div(3,8)); 
// console.log(rem(3,8)); 

// named import export
// import {sayBye, sayHello, sayHey, sayThanks} from './math.js';
// console.log(sayBye());
// console.log(sayHello());
// console.log(sayHey());
// console.log(sayThanks());

//aggregate import
import * as math from './math.js';
console.log(math.sayBye());
console.log(math.sayHello());
console.log(math.sayHey());
console.log(math.sayThanks());

