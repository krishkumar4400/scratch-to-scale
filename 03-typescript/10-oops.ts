//
class Chai {
    flovour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flovour = flavour;
        this.price = price;
    }
};

const chai = new Chai("ginger", 20);

console.log(chai); // Chai { flovour: 'ginger', price: 20 }
console.log(typeof chai); // object
console.log(chai instanceof Chai); // true

//
class Chai1 {
    flovour: string;

    constructor(flavour: string) {
        this.flovour = flavour;
        console.log(this); // Chai1 { flovour: 'ginger' }
    }
};

const chai1 = new Chai1("ginger");

// access modifier
class User {
    private password: string;
    public username: string;
    public email: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public getPassword(): string {
        return this.password;
    }
}

const user = new User("krish", "krish@gmail.com", "12345");
console.log(user);
console.log(user.email); // accessible
// console.log(user.password); // error
console.log(user.getPassword()); // 12345

class Parent {
    protected data: string;
    constructor(data: string) {
        this.data = data;
    }
    public getData(): string {
        return this.data;
    }
}

class Child extends Parent {
    constructor(data: string) {
        super(data);
    }
    public getData() {
        return this.data;
    }
}
const p = new Parent("this is the data of parent class");
const c = new Child("this is the data of child class");

console.log(p.getData()); // this is the data of parent class
console.log(c.getData()); // this is the data of child class

class Account {
    #balance = 100;

    public getBalance(): number {
        return this.#balance
    }
}

const acc = new Account();
console.log(acc.getBalance()); // 100

class Car {
    readonly seats: number = 4;

    constructor(seats: number) {
        this.seats = seats;
    }
}

const c1 = new Car(6);
console.log(c1.seats); // 4
console.log(c1.seats); // 6

// Getter & Setter
class Pen {
    private _price: number = 5;

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        if (price < 5) {
            throw new Error("Price is too less");
        }
        this._price = price;
    }
}
const pen = new Pen();
console.log(pen.price);
pen.price = 10;
console.log(pen.price);
// pen.price = 3; // Error: Price is too less
console.log(pen.price);

// static members
class Laptop {
    static brand = "Acer";
    public color: string;

    constructor(color: string) {
        this.color = color;
    }
}

const laptop = new Laptop("black");
console.log(Laptop.brand);
console.log(laptop.color);


// abstract classes
abstract class Vehicle {
    public abstract color: string;
    public abstract seats: number;
    public abstract brand: string;
    public abstract isAutomatic: boolean;

    public abstract drive(): void;
}

class Truck extends Vehicle {
    color: string;
    seats: number;
    brand: string;
    isAutomatic: boolean;

    constructor(color: string, seats: number, brand: string, isAutomatic: boolean) {
        super();
        this.color = color;
        this.seats = seats;
        this.brand = brand;
        this.isAutomatic = isAutomatic;
    }

    public drive(): void {
        console.log("Truck is driving");
    }
}

const t = new Truck("white", 2, "TATA", true);
console.log(t); // Truck { color: 'white', seats: 2, brand: 'TATA', isAutomatic: true }
t.drive();

// composition
class Heater {
    heat() {}
}

class ChaiMaker {
    constructor(private heater: Heater) {
    }
    make() {
        this.heater.heat;
    }
}