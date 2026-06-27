# _id:
```
$~ ObjectId()
ObjectId('6a3b35b5a2e84c4f67eec4a9')
```

# problems

# count all documents
```
db.users.countDocuments()
db.products.find().count()

// Count all documents in the collection
const totalDocs = db.collectionName.countDocuments({});
print("Total documents:", totalDocs);

// Get an estimated count of documents
const estimatedCount = db.collectionName.estimatedDocumentCount();
print("Estimated documents:", estimatedCount);



```

db.users.updateMany({city: "Bhagalpur"}, {$set: {city: "Mumbai"}})

db.products.updateOne({}, {$set: {price: 200000}})

db.products.updateMany({}, {$inc: {stock: 20}})

db.products.updateMany({category: "Electronics"}, {$inc: {stock: 20}})

db.users.deleteOne({name: "Rahul"})

db.users.deleteMany({age: {$lt: 18}})

db.users.deleteOne({})

db.users.find({age: $gt: 22})

db.products.countDocuments({name: "Campus"})

# projection

> ({filter}, {projects})
db.products.find({price: {$lt: 20}}, {name: 1, _id: 0}).limit(10).count()

# ordered and unordered insertion

# import export

# operators
