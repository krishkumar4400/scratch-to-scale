
// forceful type assertion
let response: any = "42";

let numericLength1: number = response.length; // no suggestion

// type assertion
let numericLength2: number = (response as string).length; // suggestion for string methods


type Book = {
    name: string
}

let bookString = '{"name": "one thing"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);


// let inputElement = document.getElementById("username") as HTMLInputElement;

// unknown vs any
let value: any;
value = "abc";
value = [1, 2, 3];
value = 10.78;
value = true;
// value.toUpperCase(); // no problem with this

let newValue: unknown;
newValue = "xyz";
newValue = [11, 22, 33];
newValue = 12.39;
newValue = false;
// newValue.toUpperCase(); // invalid

// use guard to avoid error
if (typeof newValue == "string") {
    newValue.toUpperCase();
}

// try-catch
try {

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log(error);
}

// unknown
const data: unknown = "chai aur code";
const strData: string = data as string;

// never
type Role = "user" | "admin" | "superadmin";
function redirectBasedOnRole(role: Role): void {
    if (role == "admin") {
        console.log(`Redirecting to ${role} Page`);
        return;
    }
    if (role == "user") {
        console.log(`Redirecting to ${role} Page`);
        return;
    }
    console.log(`Redirecting to ${role} Page`); // never -> superadmin
    return;
}
console.log(redirectBasedOnRole("admin"));

// 
function neverReturn(): never {
    while (true) { }
}
