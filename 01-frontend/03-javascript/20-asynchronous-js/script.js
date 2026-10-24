/**
 * async - await
 * setTimeout and setInterval
 */

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 10);
      if (num < 5) {
        resolve(num);
      } else {
        reject("invalid");
      }
    }, 2000);
  });
}

async function printHello() {
    try {
        console.log("first")
        console.log(await getNum());
        console.log("second")
    } catch (error) {
        console.log(error);
    }
}

printHello();
