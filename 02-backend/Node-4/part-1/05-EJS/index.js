import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set the view engine as ejs
app.set("view engine", "ejs");

// set the directory for the views
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

const products = [
  {
    id: 1,
    name: "products 1",
    price: 1000,
  },
  {
    id: 2,
    name: "products 2",
    price: 2000,
  },
  {
    id: 3,
    name: "products 3",
    price: 3000,
  },
  {
    id: 4,
    name: "products 4",
    price: 4000,
  },
  {
    id: 5,
    name: "products 5",
    price: 5000,
  },
];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/products", (req, res) => {
  res.render("products", { title: "Products", products });
});

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
