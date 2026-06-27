let response: any = "42";

// let numLength = response.length;
let numLength = (response as string).length;

type Book = {
    name: string;
}

let bookString = '{"name" :"who moved my cheese"}';

// let bookObject = JSON.parse(bookString);
// console.log(bookObject); // no suggestion

let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name); // suggestion (name)

// type assertion
let inputElement = document.getElementById("username") as HTMLInputElement;


// unknown and any

let value: any;

value = "krish";
value = 3.2;
value = [1, 2, 3];

value.toUpperCase(); // no problem in this case.

let value2: unknown;

value2 = "krish"
value2 = [1, 2, 3];

// value2.toUpperCase(); // 'value2' is of type 'unknown'. -> problem

// fix
let newValue: unknown;

newValue = "krish";
newValue = 12
newValue = [1, 2, 3];

if (typeof newValue === "string") { // no problem
    newValue.toLowerCase();
}

// trycatch block
try {

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log(error);
}



const data: unknown = "krish kumar";
const strData: string = data as string;


// never

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }

    if (role === 'user') {
        console.log("Redirecting to user dashboard");
        return;
    }

    // role // (parameter) role: never
    role // (parameter) role: "superadmin"
}

function neverReturn():never {
    while(true) {}
}

