

// in newer versions of node.js (14.8+), you can use top level await without needing to wrap it in an async function.
console.log("before")
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json = response.json();
console.log(json);

console.log("after");