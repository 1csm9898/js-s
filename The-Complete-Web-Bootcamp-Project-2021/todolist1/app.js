"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
var toDos = [];
let workItems = [];
//scope
var toDo = "";
//항상 view engine은 앱 상수 선언직후 작성=>앱이 사용되었다는 오류 안생김
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let day = date.getDay();
  res.render("list", { listTitle: day, lists: toDos });
});

app.post("/", function (req, res) {
  if (req.body.button === "work List") {
    workItems.push(req.body.toDo);
    res.redirect("/work");
  } else {
    toDos.push(req.body.toDo);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "work List", lists: workItems });
});

app.listen(3000, function () {
  console.log("port 3000 is running");
});
