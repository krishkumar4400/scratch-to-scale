const sayHello = require('./greetings');

const message = sayHello('krish');
console.log(message);

const math = require('./Math');
console.log(math.add(10,20));
console.log(math.subtract(10,20));