const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const works = [];
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");
const itemSchema = new mongoose.Schema({
  name: String,
});
const Item = mongoose.model("Item", itemSchema);
const item1 = new Item({
  name: "할일 1",
});
const item2 = new Item({
  name: "할일 2",
});
const item3 = new Item({
  name: "할일 3",
});
const defaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  items: [itemSchema],
});
const List = mongoose.model("List", listSchema);

// Item.insertMany(defaultItems, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("정상적 추가");
//   }
// });

app.get("/", function (req, res) {
  Item.find({}, function (err, items) {
    if (err) {
      console.log(err);
    } else {
      res.render("todo", { listTitle: "Today", lists: items });
    }
  });
});

app.get("/:param", function (req, res) {
  const customName = req.params.param;
  List.findOneAndDelete({ name: customName }, function (err, list) {
    if (err) {
      console.log(err);
    } else {
      if (!list) {
        List.find({ name: customName }, function (err, list) {
          if (!err) {
            console.log(list);
          }
        });
      } else {
        const list = new List({
          name: customName,
          items: defaultItems,
        });
        list.save();
      }
    }
  });
});

app.post("/", function (req, res) {
  const item = req.body.toDo;
  if (req.body.button === "work List") {
    works.push(item);
    res.redirect("/work");
  } else {
    const newItem = new Item({
      name: item,
    });
    newItem.save();
    res.redirect("/");
  }
});
app.get("/work", function (req, res) {
  res.render("todo", { listTitle: "work List", lists: works });
});
app.post("/delete", function (req, res) {
  const deleteItem = req.body.checkbox;
  Item.findByIdAndRemove(deleteItem, function (err) {
    if (!err) {
      console.log("정상적 삭제");
    }
  });
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("port 3000 is starting");
});
