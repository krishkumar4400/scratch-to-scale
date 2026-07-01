/**
// UI using raw js

console.log(React);

console.log(ReactDOM)

let h1 = document.createElement("h1");
h1.innerHTML = "Hello from JS";
document.body.appendChild(h1);

 */

/**
 * UI using react
 

 */

// let h1 = React.createElement("h1", null, "Hello from React");
// let h2 = React.createElement("h2", null, "Hello from React");

// const div = document.querySelector("#root");
// const root = ReactDOM.createRoot(div);

// root.render(h1);

// let h1 = React.createElement("h1", null, "Hello from React");
// let h2 = React.createElement("h2", null, "Hello from React");

// let box = React.createElement("div", { id: "box", class: "box" }, [h1, h2]);

// const div = document.querySelector("#root");
// const root = ReactDOM.createRoot(div);

// root.render(box);


// function h1() {
//     return React.createElement("h1", null, "Hello from h1");
// }

// let root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(h1());

import React from "react";
import app from "./app.js";
import test from "./test.js";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const parent = () => React.createElement("div", null, [app(), test()]);
root.render(parent());