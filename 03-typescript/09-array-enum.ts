// Array

const tools: string[] = ["linux", "docker", "k8s"];

const price: number[] = [1, 2, 3, 4, 5];

const isPass: boolean[] = [true, false, false];

const nums: Array<number> = [1.2, 4.33, 2.78, 9, 43];

type Chai = {
    name: string;
    price: number
};

const chaiOrder: Chai[] = [
    {
        name: "",
        price: 1
    },
    {
        name: "",
        price: 2
    },
    {
        name: "",
        price: 3
    },
];

const arr: readonly number[] = [1, 2, 4];

// arr[0] = 11; // error
// arr.push(12); // error

// const arr1: number[] | string[] = [1,2,3, "a", 'b']

const table: number[][] = [
    [1, 2],
    [1, 2]
];


// Tuples

let tuple: [string, number];
tuple = ["krish", 21];
// tuple = [21, "krish"]; -> error

let tuple1: [string[]];
tuple1 = [["a", "b", "b"]];

// let userInfo: [string, number, boolean?] = ["krish", 21, true]
let userInfo: [string, number, boolean?] = ["krish", 21]

let location: readonly [number, number] = [1, 2];

// named tuple
const items: [name: string, qty: number] = ["item1", 22];


// enums
enum AllSize {
    SMALL,
    MEDIUM,
    LARGE
};
const size = AllSize.LARGE;

enum StatusCodes {
    OK = 200,
    CREATED, // 201
    RETURN, // 202
    NO_CONTENT, // 203
    REDIRECT // 204
};

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
};

function makeChai(type: ChaiType) {
    console.log(`Making ${type} chai`);
}

makeChai(ChaiType.GINGER);

enum RandomEnum {
    ID = 1,
    name = "demo"
}
// RandomEnum.ID = 2; // Cannot assign to 'ID' because it is a read-only property.

// constant enums
const enum Sugars {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
};
// Sugars.LOW = "extra_low"; // Cannot assign to 'LOW' because it is a read-only property.

const s = Sugars.HIGH;

let t: [string, number] = ["chai", 10];
t.push("extra");
t.push(20);
