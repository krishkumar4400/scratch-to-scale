function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("masala", 2);

function getChaiPrice(): number {
    // return "10 rupees"; -> error
    return 10;
}

function makeOrder1(order: string) {
    if (!order) {
        return null;
    }
    return order;
}

// function makeOrder2(order: string): string {
//     if (!order) {
//         return null;
//     }
//     return order;
// }

function makeOrder2(order: string): string | null {
    if (!order) {
        return null;
    }
    return order;
}

// void 
function logger(): void {
    console.log("application logs");
}

// optional parameter
// function orderChai(type?: string) {}
// orderChai();
// orderChai("masala chai");

// default parameter
function orderChai(type: string = "Masala") { }
orderChai();
orderChai("ginger");

function fnc() {
    return 4; // in typescript default return type of a function is number
}

function createChai(order: {
    name: string,
    price: number,
    quantity: number,
    sugar: number,
    cupSize: "small" | "large"
}): { message: string, success: boolean } {
    return {
        message: "chai created",
        success: true
    }
}
createChai({ name: "demo chai", price: 10, quantity: 2, sugar: 1, cupSize: "large" });
