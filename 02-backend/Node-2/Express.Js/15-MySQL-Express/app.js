import mysql from 'mysql2/promise';

// 1. connect to mysql server
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Krish@9661",
  port:3308,
  database: "mysql_db"
});
console.log("Database connected successfully");

// Using inline values (Not Recommended)
// 2. we need to create a database
// await db.execute('create database mysql_db');
// console.log("Database connected successfully");
// console.log(await db.execute("SHOW DATABASES"));

// // // 3. then create a table
// await db.execute(`CREATE TABLE user_data (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     age INT NOT NULL
// )`);

// 4. is to perform crud operation

//insert
// await db.execute(
//   `INSERT INTO user_data(name,email,age) VALUES("krish kumar", "krishkumabgp2022@gmail.com", 20),("ankit kumar", "ankitkumabgp2022@gmail.com", 24),("aman kumar", "amanumarbgp2022@gmail.com", 43),("akash kumar", "akashkmarbgp2022@gmail.com", 32),("ashish kumar", "ashishkumarbgp022@gmail.com", 50)`
// );

// read
// [[ROWS] , [FIELDS]]
// console.log(await db.execute(`SELECT * FROM user_data`));
// const [rows] = await db.execute("SELECT * FROM USER_DATA");
// console.log(rows);

// update
// await db.execute(`UPDATE USER_DATA 
//     SET NAME="AKSHAY"
//     WHERE ID=1`);

// // delete
// db.execute(`DELETE FROM USER_DATA WHERE ID=1`);


// Using a prepared statements (Bets Practice)
// await db.execute(`
//     INSERT INTO USER_DATA(NAME,EMAIL,AGE) VALUES(?,?,?)
// `, ["KANAHAIYA", "KANAHAIYA@GMAIL.COM",77]);

// const values = [
//     ["Alice", "alice@gmail.com", 34],
//     ["Bob", "bob@gmail.com", 75],
//     ["Charlie", "charlie@gmail.com", 43],
//     ["David", "David@gmail.com", 71],
//     ["Emma", "emma@gmail.com", 23]
// ];

// await db.query("INSERT INTO user_data (name,email,age) values ?", [values]);
const [rows] = await db.execute("SELECT * FROM USER_DATA");
console.log(rows);

//use try-catch.................

try {
    const [rows] = await db.execute("UPDATE USERS SET USERNAME = ? WHERE EMAIL = ?", ["KRISH", "KRISHNA@GMAIL.COM"]);
} catch (error) {
    console.log(error.message);
}