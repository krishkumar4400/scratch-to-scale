/**
 * types
 * type alias
 * interface 
 * basic union and intersection
 * 
 */

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
};


// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//     console.log(order);
// }

// function serveChai(order: { type: string; sugar: number; strong: boolean }) {
//     console.log(order);
// }

// since signature is matching of both functions

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}
// ------------

// type TeaRecipe = {
//     water: number;
//     milk: number 
// };

// class MasalaChai implements TeaRecipe {
//     water=100;
//     milk=50;
// }
//--------------

// type CupSize = "small" | "large";
// class Chai implements CupSize { // error
    
// }
//-------------------

// interface TeaRecipe {
//     water: number;
//     milk: number;
// };

// class MasalaChai implements TeaRecipe {
//     water=100;
//     milk=200;
// }

//-------------------

interface CupSize {
    size: "small" | "large";
};

class Chai implements CupSize {
    size: "small" | "large" = "large";
}

// ------------


// type Response = {ok: true} | {ok: false};

// class Server implements Response { // not possible - error
//     ok: boolean = true;
// }

// --------------


// union
type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType) { // this is called union -> |
    console.log(t)
}

// ------------------------
// intersection
type BaseChai = {teaLeaves: number};
type Extra = {masala: number};

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}
// ------------------------


type User = {
    username: string;
    bio?: string 
};

const u1: User = {username: "Krishna"};
const u2: User = {username: "krishna", bio: "test bio"};

// ------------------------


type Config = {
    readonly appName: string;
    version: number 
};

const cfg: Config = {
    appName: "Circl",
    version: 1 
};

// cfg.appName = "new name" // Cannot assign to 'appName' because it is a read-only property

cfg.version = 2;

// ---------------------------

