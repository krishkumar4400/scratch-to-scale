import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// middlewares
app.use(express.json());
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), "public")));

// EJS template engine setup
app.set("view engine", "ejs");
app.set(
  "views",
  path.join(path.dirname(fileURLToPath(import.meta.url)), "views"),
);

// routes
app.get("/", (req, res) => {
  res.render("index", {
    username: "krish",
    bio: "I am a web developer",
    imageUrl:
      "https://imgs.search.brave.com/s592L2RHp-cFHTG-mCOAZJXjHVJIIohdZhAKK_uH8Pc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L2JsdWUtY2lyY2xl/LXdpdGgtd2hpdGUt/dXNlcl83ODM3MC00/NzA3LmpwZz9nYT1H/QTEuMS4xODc1NTQw/NDcxLjE3OTI3NzUy/NDImc2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA",
  });
});

export default app;
