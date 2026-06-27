//  5. URL: Allow us to parse and construct the url making it easy to handle web addresses.

const url = require('url');

const myUrl = new URL('https://example.com:8080/path/name?query=hello#hash');
console.log(myUrl.hash);
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.href);
console.log(myUrl.port);
console.log(myUrl.protocol);
console.log(myUrl.URL);
console.log(myUrl.pathname);

console.log(myUrl.searchParams.get('query'));