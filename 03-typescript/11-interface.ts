// interfaces

interface Chai {
    name: string;
    price: number;
    milk?: boolean;
}

const masalaChai: Chai = {
    name: "masala chai",
    price: 20
}
console.log(masalaChai); // { name: 'masala chai', price: 20 }

class MasalaChai implements Chai {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {
    id: 1,
    name: "cafe"
}
// s.id = 10 // error

console.log(s); // { id: 1, name: 'cafe' }

interface DiscountCalculator {
    (price: number): number;
}
const apply50: DiscountCalculator = (p) => p * 0.5;
console.log(apply50(500));

interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

class MyCalculator implements Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
    subtract(a: number, b: number): number {
        return a - b;
    }
    multiply(a: number, b: number): number {
        return a * b;
    }
    divide(a: number, b: number): number {
        return a / b;
    }
}

const calc = new MyCalculator();
console.log(calc.add(1, 2));
console.log(calc.subtract(1, 2));
console.log(calc.multiply(1, 2));
console.log(calc.divide(1, 2));

interface TeaMachine {
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop");
    },
}
machine.start(); // start
machine.stop(); // stop

// index signature
interface ChaiRatings {
    [flavour: string]: number;
}
const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.6,
    elaichi: 3.3
}

// ---------
interface User {
    name: string;
}
interface User {
    age: number;
}

const u: User  = {
    age: 21,
    name: "krish"
}
console.log(u);

// extend in interface 
interface A {a: string}
interface B {b: string}

interface C extends A, B {}

const obj: C = {
    a: "interface A",
    b: "interface B",
}
console.log(obj); // { a: 'interface A', b: 'interface B' }
