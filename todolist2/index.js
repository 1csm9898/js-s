const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const toDos = [];
let toDo = "";
const works = [];
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("todo", { listTitle: day, lists: toDos });
});

app.post("/", function (req, res) {
  item = req.body.toDo;
  if (req.body.button === "work List") {
    works.push(item);
    res.redirect("/work");
  } else {
    toDos.push(item);
    res.redirect("/");
  }
});
app.get("/work", function (req, res) {
  res.render("todo", { listTitle: "work List", lists: works });
});

app.listen(3000, function () {
  console.log("port 3000 is starting");
});
