/**
 * 
 */


//  Import EventEmitter Class
const EventEmitter = require('events'); 

// Create an instance of EventEmitter 
const emitter = new EventEmitter();

// 1. Define an event listener (addListener)
emitter.on("greet", () => {
    console.log("Hello Krish");
});

// 2. Trigger (emit) the "greet" event
emitter.emit("greet");


// you can also pass arguments while emitting:
emitter.on("hello", (username) => {
    console.log(`Hello ${username}`);
});

emitter.emit("hello", "Aman kumar Singh");

emitter.on("intro", (username, age, city) => {
    console.log(`Hey I am ${username} and i am ${age} years old i am from ${city}`);
});

emitter.emit("intro"); //Hey I am undefined and i am undefined years old i am from undefined

emitter.emit("intro", "krish", 20, "Bhagalpur"); //Hey I am krish and i am 20 years old i am from Bhagalpur


const val = "tttttt";
emitter.on("check", (val) => {
    console.log(val);
});
emitter.on("check", (val) => {
    console.log(val);
});
emitter.on("check", (val) => {
    console.log(val);
});
//test
// test
// test
emitter.emit("check", "test"); //test
emitter.emit("check", "test"); //test
emitter.emit("check", "test"); //test
emitter.emit("check", "test"); //test
emitter.emit("check", "test"); //test
emitter.emit("check", "test"); //test
emitter.emit("check", "test"); //test


// but it's best idea to take a single argument as an object:
emitter.on("data", (data) => {
    console.log(data);
});
emitter.emit("data", {name: "krish", age: 20, city: "meerut", college: "shobhit", proffesion: "Engineer" });
/*
{
  name: 'krish',
  age: 20,
  city: 'meerut',
  college: 'shobhit',
  proffesion: 'Engineer'
}
 */