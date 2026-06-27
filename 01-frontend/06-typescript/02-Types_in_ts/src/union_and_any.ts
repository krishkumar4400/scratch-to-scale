
// union:
// let subs: number | string = 10
let subs: number | string = '1M'
// both are acceptable


// let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';
// let apiRequestStatus: 'pending' | 'success' | 'error' = 'error';
// let apiRequestStatus: 'pending' | 'success' | 'error' = 'success';
// let apiRequestStatus: 'pending' | 'success' | 'error' = 'krish' // not possible

let airLineSeat: 'aisle' | 'middle' | 'window' = 'aisle';
airLineSeat = 'window';


// any
let orders = ['10', '20', '28', '43']

let currOrder:string | undefined;

for(let order of orders) {
    if(order === '28') {
        currOrder = order;
        break;
    }
}

console.log(currOrder);


// ## The unknown type
