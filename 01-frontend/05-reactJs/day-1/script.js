// destructuring

import  user, { val } from "./app.js";

// array
var arr1 = [10, 20, 30, 40];
console.log(arr1); // [10, 20, 30, 40]

var arr2 = arr1;

arr2.push(100);

console.log(arr1); // [10, 20, 30, 40, 100]
console.log(arr2); // [10, 20, 30, 40, 100]

// object
var obj1 = {
  name: "krish",
  age: 22,
};

console.log(obj1); // {name: 'krish', age: 22}

var obj2 = obj1;

obj2.name = "ankit";

console.log(obj1); // {name: 'ankit', age: 22}

// solution -> destructuring
var names = ["krish", "ankit", "sami", "ashish", "raj"];
var [a, b, c, d] = names;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(names);

var [x, y, ...z] = names;
console.log(x); // "krish"
console.log(y); // "ankit"
console.log(z); // ['sami', 'ashish', 'raj']

var [...newArr] = names;
console.log("names = ", names);
console.log("newArr", newArr);

// spread operator => ...
var arr3 = [...arr1];
console.log(arr1); //  [10, 20, 30, 40, 100]
arr3.push(200);
console.log(arr1); //  [10, 20, 30, 40, 100]
console.log(arr3); //  [10, 20, 30, 40, 100, 200]
var arr4 = [arr3[1], arr3[0]];
console.log(arr4); // [20, 10]

var obj3 = { ...obj1 };

console.log(obj1); // {name: 'ankit', age: 22}
obj3.name = "sami";
console.log(obj3); // {name: 'sami', age: 22}
console.log(obj1); // {name: 'ankit', age: 22}

// object destructuring
const data1 = {
  name: "krishna",
  email: "krish@gmail.com",
  password: "krish@123",
};

const data2 = { ...data1 };
console.log(data1); // {name: 'krishna', email: 'krish@gmail.com', password: 'krish@123'}
console.log(data2); // {name: 'krishna', email: 'krish@gmail.com', password: 'krish@123'}

data2.name = "rahul";

console.log(data1); // {name: 'krishna', email: 'krish@gmail.com', password: 'krish@123'}
console.log(data2); // {name: 'rahul', email: 'krish@gmail.com', password: 'krish@123'}

const { ...data3 } = data1;
console.log(data1); // {name: 'krishna', email: 'krish@gmail.com', password: 'krish@123'}
console.log(data3); // {name: 'krishna', email: 'krish@gmail.com', password: 'krish@123'}

// const { name, email, password } = data3;
// console.log(name);
// console.log(email);
// console.log(password);

const { name, ...data4 } = data1;
console.log(name); // krishna 
console.log(data4); // {email: 'krish@gmail.com', password: 'krish@123'}

var obj4 = {
    user: "user1",
    age: 21,
    city: "bgp",
    skills: ["js", "react", "next"]
};

const {users} = obj4;
console.log(users); // undefined

const {skills} = obj4;
console.log(skills);

const [first] = skills;
console.log(first); // js
const [f, ...restSkills] = skills;
console.log(f);  // js
console.log(restSkills); // ["react", "next"]


// import - export

console.log(val);
console.log(user);

// default export


// named export 