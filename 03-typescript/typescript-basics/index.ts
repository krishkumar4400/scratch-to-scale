console.log("hello typescript");

// type inference and annotation
let a = 10;
let b: string = "a";

// primitive types

// arrays
let arr: number[] = [1,2,3];
console.log(arr);

// tuples
let t: [string, string] = ["a", "b"];
console.log(t);

// Enums
 enum role {
    USER = "user",
    ADMIN = "admin",
    SUPER_ADMIN = "super_admin"
}
let user = role.ADMIN;
console.log(user) // 1 | admin

user = role.USER;
console.log(user) // 0 | user

// any vs unknown vs never

// union types
let val: string | number | null = "krish";
console.log(val); // krish

val = 21;
console.log(val); // 21

val = null;
console.log(val);
