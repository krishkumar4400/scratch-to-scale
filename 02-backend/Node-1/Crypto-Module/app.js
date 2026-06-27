//  6. Crypto: provide crypto graphy functionality such as generating hashes or encripting the data.

const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('Hello, World !'); //hash the method with the string

console.log(hash.digest('hex')); // finalize the hash and return the result as hexadecmal string.