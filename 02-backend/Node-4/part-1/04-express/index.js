import express from "express";

const app = express(); // invoking

// application level setting
app.set("view engine", "ejs");

// routing
app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.post("/api/data", (req, res) => {
  res.json({
    message: "Data received",
    success: true,
    data: req.body,
  });
});

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      product: "product 1",
    },
    {
      id: 1,
      product: "product 1",
    },
    {
      id: 1,
      product: "product 1",
    },
  ];
  res.json({
    products,
  });
});

// get a single value // dynamic route
app.get("/products/:productId", (req, res) => {
  console.log(req.params);
  const { productId } = req.params;
  const products = [
    {
      id: 1,
      product: "product 1",
    },
    {
      id: 2,
      product: "product 2",
    },
    {
      id: 3,
      product: "product 3",
    },
  ];
  const product = products.find((product) => {
    return product.id.toString() === productId;
  });
  console.log(product);
  if (product) {
    return res.status(200).json({ product });
  }
  return res.status(404).json({
    message: "product not found",
    success: false,
  });
});

// middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something went wrong, please try again later !");
});

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
