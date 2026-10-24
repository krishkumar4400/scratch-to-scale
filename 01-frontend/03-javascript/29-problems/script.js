/**
    1. build a weather app with proper error handling and asynchronous.
    2. bulk email sender
*/

const emails = ["a@a.com", "b@b.com", "c@c.com"];

function sendMail(email) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 10) * 1000;

    setTimeout(() => {
      const probability = Math.floor(Math.random() * 10);
      if (probability <= 5) {
        resolve("Email sent successfully");
      } else {
        reject("Email not sent");
      }
    }, time);
  });
}

async function sendMails(emails) {
  const responses = emails.map((email) => {
    return sendMail(email)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
  });

  console.log(responses); // [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
  const msg = await Promise.all(responses);
  console.log(msg);
}

sendMails(emails);
/**
[
  'Email sent successfully',
  'Email sent successfully',
  'Email sent successfully'
]
 */
