/**
const user = "krish";
localStorage.setItem("user", user);

const data = localStorage.getItem("user");
console.log(data);

localStorage.clear();

localStorage.setItem("age", 21);
localStorage.removeItem("age");

 */

/**
const arr = [1, 2, 3, 4, 5];
localStorage.setItem("Array", arr);
console.log(localStorage.getItem("Array")); // 1,2,3,4,5

const obj = {
  name: "krish",
  age: 21,
  city: "bgp",
};

localStorage.setItem("Object", obj);
console.log(localStorage.getItem("Object")); // [object Object]
 */

const obj = {
  name: "krish",
  age: 21,
  city: "bgp",
};

const newObj = JSON.stringify(obj);
console.log(newObj);
console.log(typeof newObj);
localStorage.setItem("newObj", newObj);
console.log(localStorage.getItem("newObj"));

const arr = [1, 2, 3, 4, 5];
const newArr = JSON.stringify(arr);
console.log(newArr);
console.log(typeof newArr);
localStorage.setItem("newArr", newArr);
console.log(localStorage.getItem("newArr"));

const a = JSON.parse(localStorage.getItem("newArr"));
const o = JSON.parse(localStorage.getItem("newObj"));

console.log(a);
console.log(typeof a);
console.log(typeof o);

// session storage
sessionStorage.clear();
sessionStorage.setItem("user", "krish");
console.log(sessionStorage.getItem("user")); // krish
sessionStorage.removeItem("user");
console.log(sessionStorage.getItem("user")) // null
