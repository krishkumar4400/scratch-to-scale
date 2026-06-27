// named import - export
// const mult = (a,b) => {
//     return a  + b;
// }

// export default mult;

//named import export 
// export const mult = (a,b) => {
//     return a  * b;
// }
// export const div = (a,b) => {
//     return a  / b;
// }
// export const rem = (a,b) => {
//     return a  % b;
// }

// aggregate import export
const sayHello = () => {
    return "Hello";
}
const sayHey = () => {
    return "Hey";
}
const sayBye = () => {
    return "Bye";
}
const sayThanks = () => {
    return "Thanks";
}

export {sayBye, sayHello, sayHey, sayThanks};