import crypto from "crypto";
// bcrypt
// import bcrypt from "bcrypt";
{
const password = "Krish@9661";

// const hashedPassword = bcrypt.hash(password, 10); //Promise { <pending> }
// const hashedPassword = bcrypt.hashSync(password, 10); //$2b$10$iGZzGi7BMl8FDwAUmhQSaeqhtwIAoReYzH61lUN9ze18GDDZJ6VK2
const hashedPassword = await bcrypt.hash(password, 10); //$2b$10$zmMuLeGm0xu4NyRwiZbl..HrjcdOvOnig2VivcJjKjnQZ48uX4u.e
console.log(hashedPassword);
}

// bcryptjs
import bcrypt from 'bcryptjs';
{
const password = "Krish@9661";
const hashedPassword = bcrypt.hashSync(password, 10);
console.log(hashedPassword);
}


{
  async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10); // generate salt (10 rounds)
    console.log("salt: ", salt)
    const hashedPassword = await bcrypt.hash(password, salt); // hash password
    return hashedPassword;
  }

  const userPassword = "12345";
  hashPassword(userPassword).then((hashed) => console.log("Hashed ", hashed));  // $2b$10$63LVB6NAc6x8lU7OwFWNPOTe/xeosDKK7CfOeqn1i2TId5BL1inCy
}

// verify password
{
    async function hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }

    async function verifyPassword(enteredPassword, storedHash) {
        const isMatch = await bcrypt.compare(enteredPassword, storedHash);
        return isMatch; // true or false
    }

    console.log("verify password");
    const password = "krish@123";
    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword);

    verifyPassword(password, hashedPassword).then(console.log);
}

// draw back of bcryptjs:
/**
 * 
 */
{
  const password1 = Array.from({ length: 80 }).fill("x").join("");
  const password2 =
    Array.from({ length: 90 }).fill("x").join("") + Math.random();

  const hashedPassword1 = await bcrypt.hash(password1, 10);
  const hashedPassword2 = await bcrypt.hash(password2, 10);

  const v1 = await bcrypt.compare(password1, hashedPassword1);
  const v2 = await bcrypt.compare(password2, hashedPassword2);
  const v3 = await bcrypt.compare(password1, hashedPassword2);
  const v4 = await bcrypt.compare(password2, hashedPassword1);

  console.log("1 - 1", v1);
  console.log("2 - 2", v2);
  console.log("1 - 2", v3);
  console.log("2 - 1", v4);

  const pass1 = "a".repeat(72);
  const pass2 = "a".repeat(72) + "b";

  const hash1 = bcrypt.hashSync(pass1, 10);
  const hash2 = bcrypt.hashSync(pass2, 10);

  console.log(bcrypt.compareSync(pass1, hash2)); // ✅ true (unexpected!)



  function secureHash(password) {
    // Step 1: Pre-hash using SHA-256 (output = 64 chars)
    const preHashed = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    // Step 2: Hash that output with bcrypt
    return bcrypt.hashSync(preHashed, 10);
  }


  // draw back: or limitation
  // 1 - 1 true
  // 2 - 2 true
  // 1 - 2 true
  // 2 - 1 true
}

/**⚙️ The 72-Character Limit in bcrypt / bcryptjs
 * 
 * bcrypt (and bcryptjs) only hashes the first 72 bytes (characters) of your password.
Anything after that is ignored.

bcrypt.hashSync("a".repeat(72), 10); // works fine
bcrypt.hashSync("a".repeat(73), 10); // extra characters ignored ❌

😳 See the issue? Even though pass2 has an extra character, bcrypt ignores it — so both are treated as the same password.
That’s a security risk for very long passwords.

🔍 Why This Happens (Internally)

The reason lies in how bcrypt was originally designed:

bcrypt is based on the Blowfish cipher algorithm 🧠

Blowfish uses a fixed 72-byte input limit

So bcrypt can only process up to 72 bytes — anything beyond that is truncated (cut off)

Since bcryptjs is a pure JavaScript reimplementation of bcrypt, it inherits the same limitation.

🧠 Important Note:

It’s 72 bytes, not 72 characters.

So if your password includes Unicode (e.g., emojis, special symbols), it might hit the limit sooner because some characters take 2–4 bytes each.

🚨 Security Implication

If a user has a password longer than 72 characters:

The extra characters won’t be hashed or verified.

Attackers could exploit this in edge cases (though rare in normal users).
 
✅ Option 2: Pre-Hash the Password (for advanced systems)

If you really want to allow very long passwords, you can pre-hash them using a different hash function (like SHA-256) before passing to bcrypt:

✅ Option 1: Limit Password Length (Simple & Common)

Before hashing, ensure the password length ≤ 72 characters:
if (password.length > 72) {
  throw new Error("Password too long — maximum 72 characters allowed.");
}


🧾 Interview-Ready Answer

“bcrypt (and bcryptjs) only uses the first 72 bytes of a password because it’s based on the Blowfish algorithm, which has a 72-byte input limit. Any characters beyond that are ignored during hashing, which can cause different passwords to produce the same hash. To avoid this, developers either restrict password length to 72 characters or pre-hash the password using SHA-256 before passing it to bcrypt.”

| Aspect           | bcrypt / bcryptjs                       |
| ---------------- | --------------------------------------- |
| Input limit      | 72 bytes                                |
| Extra characters | Ignored                                 |
| Cause            | Blowfish cipher limitation              |
| Risk             | Two long passwords may hash identically |
| Solution 1       | Limit password length                   |
| Solution 2       | Pre-hash using SHA-256                  |

*/

console.log("a".repeat(10));