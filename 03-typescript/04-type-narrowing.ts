function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} Chai`;
    }
    return `Chai order ${kind}`;
}

console.log(getChai("green tea"));
console.log(getChai(101));


// ---

// type narrowing
function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

// console.log(serveChai("ginger"));
console.log(serveChai());

// exaustive check
function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai`;
    }

    if (size === "medium" || size === "large") {
        return `make extra chai`;
    }

    return `chai order ${size}`;
}

console.log(orderChai("small"));
console.log(orderChai("large"));
console.log(orderChai(111));

// ----

class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}

class CuttingChai {
    serve() {
        return `Serving Cutting Chai`;
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve(); // it is guaranteed that the serve method will be called from KulhadChai class
    }
}

console.log(serve(new KulhadChai)); // Serving Kulhad Chai

// making custom types
type ChaiOrder = {
    type: string,
    sugar: number
}

// validation to check if type is correct
function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with sugar ${item.sugar}`;
    }
    return `Serving custom ${item}`;
}

console.log(serveOrder({ type: "Elaichi", sugar: 10 }));
console.log(serveOrder("banana chai"));

// type narrowing
type MasalaChai = {
    type: "masala",
    spicelevel: number
}
type GingerChai = {
    type: "ginger",
    amount: number
}
type ElaichiChai = {
    type: "elaichi",
    aroma: number
}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            console.log("Masala chai");
            break;
        case "ginger":
            console.log("Ginger chai");
            break;
        case "elaichi":
            console.log("Elaichi chai");
            break;
    }
}
makeChai({ type: "elaichi", aroma: 9 });

function brew(order: MasalaChai | GingerChai) {
    if ("spicelevel" in order) {
        return `${order.type} chai with ${order.spicelevel} spice level`;
    }
}
console.log(brew({ type: "masala", spicelevel: 4 }));

function isStringArray(arr: unknown): arr is string[] {
    return typeof arr == "string";
}

// type guards
