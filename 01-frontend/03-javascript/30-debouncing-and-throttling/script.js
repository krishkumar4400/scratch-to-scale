// function debounce(fn, delay) {
//     let timer;
//     return function() {
//         clearTimeout(timer);
//         timer = setTimeout(fn, delay);
//     }
// }

// document.querySelector("#search").addEventListener(
//   "input",
//   debounce(function () {
//     console.log("chala");
//   }, 400),
// );

/**
 * - json parse
 * - json stringify
 */

const json = JSON.stringify({
    name: "krish",
    age: 21
});
console.log(json);
console.log(typeof json); // string

const obj = JSON.parse(json);
console.log(obj)
console.log(typeof obj);
