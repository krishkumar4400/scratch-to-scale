
// type narrowing
function getData(data: string | number) {
    if(typeof data === 'string') {
        return `The data: ${data}`;
    }
    return `The data: ${data}`;
}

// truthiness
function serverData(msg?:string) {
    if(msg) {
        return `serving ${msg}`;
    }
    return `serving default data`;
}

// exaustive checks:
function orderChai(size: "small" | "medium" | "large" | number) {
    if(size === 'small') {
        return `small cutting chai...`;
    }
    if(size === 'medium' || size === 'large') {
        return `make extra chai`;
    }
    return `chai order #${size}`;
}

// checking types of instances and objects - guard checking or type guard
class KulhadChai {
    serve() {
        return "Serving kulhad chai";
    }
}

class Cutting {
    serve() {
        return "Serving cutting chai";
    }
}

function serve(chai: KulhadChai | Cutting) {
    if(chai instanceof KulhadChai) {
        return chai.serve();
    }
}


type Chaiorder = {
    type: string,
    sugar: number 
};

function isChaiOrder(obj: any):obj is Chaiorder {
    return (
        typeof obj === 'object' &&
        typeof obj !== null && 
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    );
}

function serveOrder(item: Chaiorder | string) {
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}`;
    }

    return `Serving custom chai ${item}`;
}


type MasalaChai = {
    type: "masala";
    spicelevel: number;
};
type GingerChai = {
    type: "ginger";
    amount: number;
};
type ElaichiChai = {
    type: "elaichi";
    aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

// narrowing
function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`;
        case "ginger":
            return `Ginger Chai`;
        case 'elaichi':
            return `Elaichi Chai`;
    }
}

function brew(order: MasalaChai | GingerChai) {
    if ("spicelevel" in order) {
        return `Server Masala Chai with ${order.spicelevel} spiceleve;`;
    }
}

// unknown
function isStringArray(arr: unknown):arr is string[] {
}


// never type