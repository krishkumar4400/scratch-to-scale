
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
}

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}

// type TeaReceipe = {
//     water: number;
//     milk: number
// }

// class MasalaChai implements TeaReceipe {
//     water = 10;
//     milk = 20;
// }

// type CupSize = "small" | "large";

// class Chai implements CupSize {

// }

// interface
interface TeaReceipe {
    water: number;
    milk: number
}
// class MasalaChai implements TeaReceipe {
//     water = 10;
//     milk = 20;
// }

interface CupSize {
    size: "small" | "medium"
}
class Chai implements CupSize {
    size: "small" | "medium" = "medium";
}

// type Response = { ok: true } | { ok: false };
// class MyRes implements Response {
//     ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon"; // union -> literal types

function orderChai(t: TeaType) {
    console.log(t);
}

type BaseChai = {teaLeaves: number};
type Extra = {masala: number};

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string;
}

const u1: User = {
    username: "krish",
}
const u2: User = {
    username: "krish",
    bio: "no bio"
}

type Config = {
    readonly appName: string;
    version: number;
}

const cfg: Config = {
    appName: "masterji",
    version: 1
}

// cfg.appName = "myapp"; // Cannot assign to 'appName' because it is a read-only property.

