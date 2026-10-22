// union
let subs: number | string = 10;
subs = '1M';

console.log(subs);

let apiResponse: "pending" | "success" | "error" = "pending";
// apiResponse = "done"; -> error

let airlineSeat: "aisle" | "window" | "middle" = "middle";
airlineSeat = 'window';

// any
let orders = ['12', '20', '28', 40];

// let currentOrder; // default -> any
// currentOrder = 100; // valid
// currentOrder = '200 // valid'
// currentOrder = false; // valid

// let currentOrder!: string; // default -> any
let currentOrder: string | undefined; // default -> any

for (let order of orders) {
    if (order == '28') {
        currentOrder = order;
        break;
    }
}

// currentOrder = "100";

console.log(currentOrder); // 28
console.log(typeof(currentOrder)); // string

