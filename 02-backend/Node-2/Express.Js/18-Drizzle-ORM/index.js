import { eq } from "drizzle-orm";
import { db } from "./Config/drizzle.js";

import { usersTable } from "./drizzle/schema.js";

const main = async () => {
  //write
  //insert single data
  // const insertUser = await db.insert(usersTable).values({
  //   name: "krish kumar",
  //   age: 20,
  //   email: "krishkumar3771@gmail.com",
  // });

  // insert multiple data
  // const insertUser = await db.insert(usersTable).values([
  //   { name: "ankit", age: 19, email: "ankit@gmail.con" },
  //   { name: "sami", age: 18, email: "sami@gmail.con" },
  //   { name: "raj", age: 20, email: "raj@gmail.con" },
  //   { name: "rahul", age: 21, email: "rahul@gmail.con" },
  //   { name: "aman", age: 22, email: "aman@gmail.con" },
  //   { name: "akash", age: 20, email: "akash@gmail.con" },
  // ]);

  //read
  // const users = await db.select().from(usersTable);
  // console.log(users);

  const users = await db.select().from(usersTable).where({
    email: "aman@gmail.con",
  });
  console.log(users);

  //update:
  // recommended
  // await db
  //   .update(usersTable)
  //   .set({
  //     name: "Aman Kumar Singh",
  //   })
  //   .where({
  //     email: "aman@gmail.con",
  //   });

  //update:
  // recommended => using conditional operators
  await db
    .update(usersTable)
    .set({
      name: "Krishna Akshay",
    })
    .where(eq(usersTable.email, "krishkumarbgp2022@gmail.com"));
  console.log("Updated Successfully");

  // Delete
  await db.delete(usersTable).where(eq(usersTable.email, "aman@gmail.con"));
  console.log("deleted successfully");
};

main().catch((error) => console.error(error.message));