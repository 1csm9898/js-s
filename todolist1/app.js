const express = require("express");
const bodyParser = require("body-parser");
var toDos = [];
//scope
var toDo = "";
//항상 view engine은 앱 상수 선언직후 작성=>앱이 사용되었다는 오류 안생김
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleString("kr", options);
  res.render("list", { kindOfDay: day, toDos: toDos });
});

app.post("/", function (req, res) {
  toDos.push(req.body.toDo);
  res.redirect("/");
});
app.listen(3000, function () {
  console.log("port 3000 is running");
});
