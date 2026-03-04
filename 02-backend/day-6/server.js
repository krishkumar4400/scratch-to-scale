const { default: mongoose } = require("mongoose");
const app = require("./src/app.js");

function connectToDB() {
  mongoose
    .connect(
      process.env.MONGO_URI,
    )
    .then((res) => console.log("Connected to Database"));
}

connectToDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// - server start karna
// - database se connect karna
