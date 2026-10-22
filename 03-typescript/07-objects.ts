// const chai = {
//     name: "Masala Chai",
//     price: 20,
//     isHot: true
// };

let tea: {
    name: string;
    price: number;
    isHot: boolean
};

tea = {
    name: "Ginger tea",
    price: 25,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const chai1: Tea = {
    name: "chai",
    price: 30,
    ingredients: ["ginger", "tea leaves"]
}

// duck typing
type Cup = {
    size: string;
}
let smallCup: Cup = {
    size: "200ml"
}
let bigCup = {
    size: "500ml",
    material: "steal"
}

smallCup = bigCup;

// 

type Brew = {
    brewTime: number
}
const coffee = {
    brewTime: 5,
    beans: "Arabica"
}

const chai: Brew = coffee; // no error

//

type User = {
    username: string;
    password: string
}
const u: User = {
    username: "krish",
    password: "123"
}

// spliting out datatype
type Item = {
    name: string;
    quantity: number;
};
type Address = {
    street: string;
    pin: number;
}

type Order = {
    id: string;
    items: Item[];
    address: Address[]
};

const order: Order = {
    id: "1",
    items: [{ name: "chai", quantity: 1 }, { name: "coffee", quantity: 1 }],
    address: [{ street: "street1", pin: 123 }, { street: "street2", pin: 456 }]
}

// Partial and Required

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with", updates);
}

updateChai({});
updateChai({ price: 10 });
updateChai({ price: 10, name: "new chai" });
updateChai({ price: 10, name: "new chai", isHot: false });

type ChaiOrder = {
    name?: string;
    quantity?: number
};
const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}
placeOrder({ quantity: 2, name: "demo chai" });

// Peak
type Chai1 = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type BasicChaiInfo = Pick<Chai1, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 2
};

// Omit
type ChaiInfo1 = Omit<Chai1, "isHot">;

const chaiInfo1: ChaiInfo1 = {
    name: "chai name",
    price: 22,
    ingredients: ["no ingredients"]
}