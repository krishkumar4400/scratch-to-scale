/**
 * introduction to js
 * why it is important-> kyuki website par har prakar ka animation se lekar interaction lagbhag har prakar ka engagement create karne ke liye js use hota hai
 * what can it do for you -> engagement, interaction, animation, validation.
 * script ka use karke js ko attach karte hai
 * js browser me run karta hai
 * var let const 
 * console .... prompt alert
 * strings
 * string methods-template strings(literal) slice split join replace includes
 *

js is a scripting language
computers understands binary(0,1)



krish -> interpreter/compiler -> 0101001010101

js creator -> brendan eich works in netscape. build js language in 15 days bacause it build in few time so many issues are there with js 
itni jldi bani to kaafi issues reh gye 
jaldi baaji ka kaam ho hya
errors and bugs choot gaye
to unhe fix karte karte js ke bahut saare versions aaye
unme se ek sabse bada version aaya jiska naam tha es6 
uske baad aur bhi version aaya par es6 sabase bada change raha js ki history me, kyuki js lagbhag completely  badal gayi 
matlab ki js ke issues and bugs and problems ko fix karne ke liye bahut sare naye updates diye gaye es6 version me
//js sirf browser ke liye banayi gayi thi
//

//js browser pe chalti hai 
// hum index.html se connect krte hai js file ko
// jab aapki html file chlegi tab hi aapka js bhi chal jaayega



    kodr
        - 


 */

// alert();

// variable
var a = 10;
let b = 20;

// constant
const c = 30;
// c = 40; //  Uncaught TypeError: Assignment to constant variable.

console.log(alert);
// console.log(alert());
console.error("this is an error");
console.warn("This is a warning");

str = "Hey my name is krish kumar how are you"

// splitting string into array
console.log(str.split()) //['Hey my name is krish kumar how are you']
console.log(str.split(' '));// ['Hey', 'my', 'name', 'is', 'krish', 'kumar', 'how', 'are', 'you']
console.log(str.split('a'))// ['Hey my n', 'me is krish kum', 'r how ', 're you']

// slicing
console.log(str.slice(4,11)) // my name

// split and join
console.log(str.split(' ').join(' ')) // Hey my name is krish kumar how are you
console.log(str.split(' ').join('a'))// Heyamyanameaisakrishakumarahowaareayou
console.log(str.split('a').join(''))// Hey my nme is krish kumr how re you

// replace the string 
console.log(str.replace("a", "krish")) // Hey my nkrishme is krish kumar how are you
console.log(str.replaceAll("a", "krishna")) // Hey my nkrishname is krish kumkrishnar how krishnare you

// includes -> true || false
console.log(str.includes("a")) // true
console.log(str.includes("krish"))// true
console.log(str.includes("krishna"))// false
console.log(str.includes("kri"))// true
console.log(str.includes(""))// true
console.log(str.includes("werf"))// false

