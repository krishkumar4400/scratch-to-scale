/** Advance JavaScript
 *
 * Object Oriented Concepts in javaScript
 *
 * - class expression
 * - hoisting
 * - inheritance
 * - getter & setter
 */

// class expression

class Person {
  constructor() {}
}

// in case of class expression hoisting is not possible
// let an = new Animal();
// console.log(an); // ReferenceError: Cannot access 'Animal' before initialization

let Animal = class {
  constructor() {
    this.name = "Dodo";
    this.breed = "dog";
  }
};
let a1 = new Animal();
console.log(a1); // Animal { name: 'Dodo', breed: 'dog' }

class A {
  constructor() {
    this.data = "Demo Data";
  }
}
var a = new A();
console.log(a);

// inheritance
class Vehicle {
  constructor() {
    this.color = "black";
    this.wheel = 4;
    this.seats = 4;
  }

  drive() {}
  break() {}
}

class Car extends Vehicle {
  constructor() {
    super();
    this.brand = "TATA";
    this.model = "s4fd";
    this.speed = 180;
  }

  fly() {}
}

const c1 = new Car();
console.log(c1);

/*
Car {
  color: 'black',
  wheel: 4,
  seats: 4,
  brand: 'TATA',
  model: 's4fd',
  speed: 180
}
*/

// Getter and Setter
class User {
  constructor() {
    this.username = "krish";
    this._password = 123;
  }

  // setter
  set password(password) {
    if (!password) {
      console.log("Invalid Password");
      return;
    }
    this._password = password;
  }

  // getter
  get password() {
    return this._password;
  }
}

let u1 = new User();
console.log(u1);

u1._password = 1111;
console.log(u1);

u1.password = 9999;
console.log(u1.password);

// Problems
// 1.
class Users {
  constructor() {
    this.name;
    this.email;
  }

  login(name, email) {
    this.name = name;
    this.email = email;

    console.log("User logged in");
    return;
  }
}

const user1 = new Users();
user1.login("krish", "email");
console.log(user1);

const user = {
  name: "",
  email: "",
  login: () => {
    console.log("user logged in");
  },
};
user.login();

// 2.
class AppUser {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log("User logged in");
  }
}

const product = {
  name: "cap",
  price: 3300,
  discountedPrice: function () {
    return this.price - 200;
  },
};

console.log(product.discountedPrice()); // 3100

// 3.
class Cars {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(this.brand + " - " + this.speed);
  }
}

const car1 = new Cars("Hyundai", 200);
console.log(car1); // Cars { brand: 'Hyundai', speed: 200 }
car1.drive(); // Hyundai - 200

// 4.
class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }
  introduce() {
    return `${this.name} - ${this.rollNo}`;
  }
}

const st1 = new Student("krish", 47);
console.log(st1.introduce()); // krish - 47

// 5.
const obj1 = {
  fnc1: function () {
    console.log(this);
  },
  fnc2: () => {
    console.log(this);
  },
};
obj1.fnc1();
obj1.fnc2();

// 6. define constructor without class

function User1(name) {
  this.name = name;
  ((this.login = function () {
    console.log("logged in");
  }),
    (this.loggedIn = function () {
      console.log("logged in");
    }));
}
const u2 = new User1("krish");
console.log(u2); // User1 { name: 'krish' }
u2.login();

// User1.prototype.loggedIn = function() {
//     console.log("logged in");
// }

let user3 = new User1("ankit");
let user4 = new User1("ashish");
console.log(user3 === user4); // false
// console.log(user3.loggedIn === user4.loggedIn); // true
console.log(user3.loggedIn === user4.loggedIn); // false

function demo () {
    console.log(this); // window
    console.log(this.name); // window
}

let obj = {
    name: "harsh"
}

demo.call(obj); // harsh

demo.apply(obj);

function demo1(a, b, c, d) {
  console.log(this); // window
  console.log(this.name); // window
}
let obj5 = {
  name: "harsh",
};
demo1.apply(obj5, [1,2,3,4])
let fnc = demo1.bind(obj1);
fnc();

