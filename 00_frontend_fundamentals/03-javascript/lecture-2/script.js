/**
 * statements expressions
 * 
 * 
 */

var a = 10
let b = 20
const c = 30

console.log("krish - same");
console.info("krish - same");
// kuch kuch browsers bas console.info ko thode alag tareeke se show krte hai unke aage ek i sign aa jata hai

console.warn("warning message");
console.error("Error message");

console.table({name: "krish", age: 20, city: "Meerut", cgpa: 10, });

// name = prompt("name ?");
// console.log(name)

// alert(name)

// strings:
""
''
"1234a"


name = "krish kumar"
console.log(name.slice(6, 11)); // kumar
console.log(name.slice(6, 110)); // kumar

// template strings - `${}`
console.log("krish = 2+2");
console.log(`krish = ${2+2}`);

console.log("krish kumar".split()) // ['krish kumar']
console.log("krish kumar".split('')) //  ['k', 'r', 'i', 's', 'h', ' ', 'k', 'u', 'm', 'a', 'r']
console.log("krish kumar".split("k")) //  ['', 'rish ', 'umar']
console.log("krish kumar".split("r")) //  ['k', 'ish kuma', '']
console.log("krish kumar".split("z")) // ['krish kumar']

console.log("krish bhai kaise ho".replace("k", "gi")) // girish bhai kaise ho
console.log("krish bhai kaise ho".replaceAll("k", "gi")) // girish bhai kaise ho

console.log("krish".includes("k")) // true
console.log("krish".includes("u")) // false

// statements and expressions
// ek aisa code jo fixed answer dede wo statements
// wk complete line ka code jiske last mein ;
// expression - code jo value deta hai
// statement - code jo kaam karta ha, value nahi deta