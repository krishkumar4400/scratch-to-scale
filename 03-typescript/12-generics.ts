function wrapInArray<T>(item: T): T[] {
    return [item];
}

console.log(wrapInArray(1));
console.log(wrapInArray("app"));
console.log(wrapInArray({ name: "krish" }));

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

const a = pair("test1", "test2");
console.log(a) // [ 'test1', 'test2' ]

const b = pair(1, 2);
console.log(b) // [ 1, 2 ]

const c = pair("age", 21);
console.log(c); // [ 'age', 21 ]

const d = pair("data", { name: "krish", age: 21 });
console.log(d); // [ 'data', { name: 'krish', age: 21 } ]

const e: [number, number] = pair(1, 2);
console.log(e) // [ 1, 2 ]

// const f: [number, number] = pair("a", "b"); // error
// console.log(f) // error

interface Box<T> {
    content: T;
}

const numberBox: Box<number> = {
    content: 1
};
const stringBox: Box<string> = {
    content: "a"
}

console.log(numberBox); // { content: 1 }
console.log(stringBox); // { content: 'a' }

// usecase of generics
interface ApiPromise<T> {
    status: number;
    data: T;
    message: string;
};
const res: ApiPromise<{ username: string, email: string, password: number }> = {
    status: 200,
    data: { username: "krish", email: "krish@gmail.com", password: 12345 },
    message: "success",
}
console.log(res);
/*
{
  status: 200,
  data: { username: 'krish', email: 'krish@gmail.com', password: 12345 },
  message: 'success'
}
*/
