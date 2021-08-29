const express = require("express");
const bodyParser = require("body-parser");
var toDos = [];
var toto = "";
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (res, req) {
  req.render("todo", { toDos: toDos });
});

app.post("/", function (res, req) {
  const toDo = res.body.toDo;
  toDos.push(toDo);
  req.redirect("/");
});

app.listen(3000, function () {
  console.log("port 3000 is starting");
});
