import argon2 from "argon2";

export default async function hashPassword (plainPassword) {
  try {
    const hashedPassword = await argon2.hash(plainPassword);
    return hashedPassword;
  } catch (error) {
    console.error(error.message);
  }
}

export default async function verifyPassword (plainPassword, hashedPassword) {
    const isMatch = await argon2.verify(hashedPassword, plainPassword);
    return isMatch;
}