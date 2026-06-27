// sessions
import jwt from 'jsonwebtoken';

async function jsonWebToken() {
    const JWT_SECRET_KEY='g53(J#&&!lOJn';
    const _id = 'isdfbyo83489ryfhuiefjnc37r43qo6ry24hiurf';
    const token = jwt.sign({ userId: _id }, JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    console.log(token);
}

jsonWebToken();


// verify token
async function verifyJWTToken(token, JWT_SECRET_KEY) {
    const isAuth = jwt.verify(token, JWT_SECRET_KEY);
    console.log(isAuth);
}

function main() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpc2RmYnlvODM0ODlyeWZodWllZmpuYzM3cjQzcW82cnkyNGhpdXJmIiwiaWF0IjoxNzYwNTQ2MjI0LCJleHAiOjE3NjExNTEwMjR9.mGBWXx-wHR88srGaWkb-TFTPB5X5hyFTRfP2RvQ1h2c";
    const JWT_SECRET_KEY = "g53(J#&&!lOJn";
    verifyJWTToken(token, JWT_SECRET_KEY);
}
main();