//   4. OS: provides informations about the operating systems such as cpu architecture, free memory, total memory and system uptimes etc.

const os = require('os');

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());

console.log('Platform: ', os.platform()); //return platform details
// Platform:  win32

console.log('cpu architecture: ', os.arch());
