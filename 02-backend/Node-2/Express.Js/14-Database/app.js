import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("mongodb_nodejs_DB");
    const userCollection = db.collection("users");

    // Insert one document
    await userCollection.insertOne({
      name: "krish kumar",
      age: 20,
    });

    // Insert multiple documents
    await userCollection.insertMany([
      { name: "ankit", age: 19 },
      { name: "sami", age: 18 },
      { name: "raj", age: 20 },
      { name: "ashish", age: 20 },
    ]);

    // Fetch and display all users
    const users = await userCollection.find().toArray();
    console.log("Users in collection:", users);

    console.log("Data inserted successfully ✅");
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    await client.close();
}
}

// run();

const shopDB = client.db("shop");
const products = shopDB.collection("products");
// const data = await products.find().toArray();
// console.log(data);

console.log("SPecial data:\n");
const data = await products.findOne({price:400});
console.log(data);
console.log(data._id);

// update
await products.updateOne({ name: "Kitchen Blender" }, {$set: { isFeatured : true}});
console.log("Data updated successfully");

// delete
// await products.deleteMany({ name: "Kitchen Blender" });
// console.log("Data deleted successfully");

const item = await products.deleteMany({ name: "Cookware Set" });
console.log(`${item.deletedCount} Items deleted`);



await client.close();