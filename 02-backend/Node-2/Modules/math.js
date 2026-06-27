// const add = (a,b) => {
//     return a + b;
// }

// module.exports = add;

const add = (a,b) =>{
    return a + b;
}

const substract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    return a / b; 
}

// module.exports.add = add;
// module.exports.substract = substract;
// module.exports.multiply = multiply;
// module.exports.divide = divide;

//Another way to export the modules:
module.exports = {
    add,
    substract,
    multiply,
    divide
};