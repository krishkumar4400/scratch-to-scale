/**
 * - Introduction to Asynchrony in Javascript
 * - Introduction to `callbacks` and problem in Callbacks
 * - understanding `promises` - `pending`, `resolve`, `rejected`
 * - How to prevent callback hell using `async` & `await`
 * - `setInterval` & `setTimeout` in javascript
 */

function fetchProfile(username, cb) {
  cb({ username, email: "email", password: "password" });
}
fetchProfile("krish", function (data) {
  console.log(data); // { username: 'krish', email: 'email', password: 'password' }
});

// callbacks and callback hell

function getCurrentUser(userId, cb) {
  cb({ userId, name: "krish", email: "test@test.com", isVerified: true });
}

getCurrentUser(111, function (data) {
  console.log(data);
});
/*
{
  userId: 111,
  name: 'krish',
  email: 'test@test.com',
  isVerified: true
}
*/

// EXERCISE
// 1.
function afterDelay(time, cb) {
  setTimeout(() => {
    cb();
  }, time);
}

afterDelay(2000, () => {
  console.log("callback executed");
});

/**
 * Promises
 */

const promise = new Promise((resolve, reject) => {
  // resolve("hello");
  reject("some error");
});

console.log(promise); // Promise { undefined } // Promise { 'hello' } // Promise { <rejected> 'some error' }
promise
  .then((response) => {
    console.log(response); // hello
  })
  .catch((error) => {
    console.log(error); // some error
  });

// promise usecase
fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
/**
{
  results: [
    {
      gender: 'male',
      name: [Object],
      location: [Object],
      email: 'bojan.orlic@example.com',
      login: [Object],
      dob: [Object],
      registered: [Object],
      phone: '035-6289-944',
      cell: '063-7173-235',
      id: [Object],
      picture: [Object],
      nat: 'RS'
    }
  ],
  info: { seed: '179e275c83d4a8f6', results: 1, page: 1, version: '1.4' }
}
*/
