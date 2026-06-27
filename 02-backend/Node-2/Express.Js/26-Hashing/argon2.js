import argon2 from 'argon2';

/**
 * ⚙️ What is Argon2?

Argon2 is a modern password hashing algorithm — newer, 
stronger, and more secure than bcrypt.

🧠 Why Argon2 Was Created

bcrypt was great… but it had:

A 72-byte input limit

Less resistance against GPU attacks

No built-in memory hardness

So Argon2 was designed to fix all that 🔒

| Type             | Purpose                                  | Used For                |
| ---------------- | ---------------------------------------- | ----------------------- |
| 🧩 **Argon2i**   | Optimized for password hashing           | Used in web apps        |
| ⚡ **Argon2d**    | Optimized for resistance to GPU cracking | Used in crypto apps     |
| 🛡️ **Argon2id** | Hybrid of both (recommended)             | Default for modern apps |

✅ In most Node.js projects → use Argon2id

| Feature                | **bcrypt** | **Argon2**                 |
| ---------------------- | ---------- | -------------------------- |
| Algorithm Age          | 1999       | 2015                       |
| Input Length Limit     | 72 bytes   | No limit                   |
| Memory Hardness        | ❌ No       | ✅ Yes                      |
| GPU Resistance         | ❌ Weak     | ✅ Strong                   |
| Configurable Resources | Limited    | CPU + Memory + Parallelism |
| Security Level         | High       | 🔥 Very High               |

✅ Argon2 is “memory-hard,” meaning it requires both 
CPU and RAM to compute a hash → harder for attackers to
 brute-force with GPUs.


🔍 Understanding Argon2 Hash Parts

Example hash:
$argon2id$v=19$m=65536,t=3,p=4$F9dz6...$Yh8qK...
| Part       | Meaning                     |
| ---------- | --------------------------- |
| `argon2id` | Algorithm type              |
| `v=19`     | Version                     |
| `m=65536`  | Memory used (in KB → 64 MB) |
| `t=3`      | Time cost (iterations)      |
| `p=4`      | Parallelism (threads)       |
| Rest       | Salt + Hash                 |
⚙️ Configuring Argon2 Parameters

You can adjust memory cost, iterations, and parallelism 
for better security:

const hash = await argon2.hash("Krish@9661", {
  type: argon2.argon2id,   // recommended
  memoryCost: 2 ** 16,     // 64 MB
  timeCost: 3,             // 3 iterations
  parallelism: 4           // use 4 threads
});

✅ More memory & time cost = more secure, but slower
(You balance based on your server’s power)

🧠 Verification

Argon2 automatically extracts salt and parameters from the hash,
so you only need to pass two arguments:

await argon2.verify(hashedPassword, inputPassword);

If password matches → returns true, otherwise false.

🔒 Best Practices
Always use Argon2id (hybrid version)

Use memoryCost ≥ 64MB for production

Never store plaintext passwords

Store only the Argon2 hash string

Use async/await (since hashing is CPU heavy)

| Library  | Input Limit | Memory-Hard | Recommended               |
| -------- | ----------- | ----------- | ------------------------- |
| bcrypt   | 72 bytes    | ❌ No        | ⚙️ Good                   |
| bcryptjs | 72 bytes    | ❌ No        | 🧪 Learning only          |
| scrypt   | None        | ✅ Yes       | ⚙️ Strong                 |
| argon2   | None        | ✅ Yes       | 🔥 Best (Modern Standard) |

🧾 Interview-Ready Answer

“Argon2 is a modern password hashing algorithm designed to
 replace bcrypt. It’s memory-hard, which makes it resistant
  to GPU and brute-force attacks. Argon2id, its hybrid version,
   is recommended for web applications. It doesn’t have
    bcrypt’s 72-character limitation and allows fine-tuning
     of CPU, memory, and parallelism to balance security and 
     performance.”
 */

async function hashPassword(password) {
    const hashedPassword = await argon2.hash(password);
    console.log(hashedPassword);
    return hashedPassword;
}

async function verifyPassword(password, hashed) {
    const isValid = await argon2.verify(hashed, password);

    console.log("Password Match: ", isValid);
}

(
    async() => {
        const password = "krish@kumar";
        const hash = await hashPassword(password);
        await verifyPassword(password, hash);
    }
)();

