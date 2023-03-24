const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

app.use(morgan("combined"));
// app.engine("handlebars", handlebars.engine({ extname: ".hbs" }));
app.engine(
  "hbs",
  hbs.create({
    extname: "hbs",
    // defaultLayout: "main",
  }).engine
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// console.log(__dirname);
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
