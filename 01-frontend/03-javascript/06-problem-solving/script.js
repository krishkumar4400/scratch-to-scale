// 1. print even numbers
for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 2; i < 21; i += 2) {
  console.log(i);
}

// print numbers from 10 to 1
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// print "YES" 5 times
for (let i = 0; i < 5; i++) {
  console.log("YES");
}

// Print whether numbers from 1 to 10 are even or odd
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i, " = EVEN");
  } else {
    console.log(i, " = ODD");
  }
}

// let num = prompt("Enter a number");
// // bydefault prompt takes input as string
// console.log(typeof num);
// console.log(typeof(num));

// // conversion method from string to integer
// num2 = parseInt(num);
// console.log(typeof num2); //number
// num3 = Number(num);
// console.log(typeof num3); //number

// num4 = +prompt("Enter number");
// console.log(typeof num4); // number

// // ask user input a number and check either it is negative or positive
// val = +prompt("Enter the number");
// if(val < 0) {
//     console.log(`${val} is a negative number`);
// } else {
//     console.log(`${val} is a positive number`);
// }

let age = prompt("Enter your age");
// console.log(age);
if (age === null) {
  console.error("You pressed cancle");
} else {
  if (age.trim() === "") {
    console.error("Invalid input");
  } else {
    age = Number(age.trim());
    if (isNaN(age)) {
      console.log("Age should be a integer");
    } else {
      console.log(`Age = ${age}`);
    }
  }
}

// optimized
let age2 = prompt("Enter the age");
if (age2 === null) return console.error("You cancled it");
age2 = age2.trim();
if (!age2) return console.error("Bhai dhang se likhle");
const ageNum = Number(age2);
if (isNaN(ageNum)) return console.error("bhai please number dede");
console.log("Confirm ye number hai");

// Note -> NaN === NaN -> false

// "    krish    " => leading and traling spaces
console.log("     krish     ");
console.log("    krish    ".trim());
console.log("     ".trim());
