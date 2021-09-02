const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const _ = require("lodash");
const posts = [];
const home =
  "Nostrud tempor commodo eiusmod aliqua eu dolor reprehenderit consectetur in non. Labore consectetur laboris eu in magna ex amet do ad cillum do adipisicing amet. Et ex ut fugiat tempor in mollit sit.";
const about =
  "Ex dolor esse quis deserunt officia exercitation dolor dolor cillum adipisicing. Fugiat duis incididunt pariatur voluptate ipsum laborum velit. Reprehenderit reprehenderit nulla Lorem aliquip reprehenderit eu. Cupidatat Lorem eu deserunt qui. Culpa officia exercitation ad sint.";
const contact =
  "Ut commodo tempor culpa excepteur ad pariatur eiusmod excepteur ea. Dolore excepteur tempor nisi aliqua dolore est anim deserunt magna do dolor qui. Ex mollit commodo officia incididunt elit commodo. Duis magna veniam commodo et sint voluptate proident in ut esse ea. Id ex officia aliquip officia consectetur ullamco incididunt nisi ea velit consectetur. Culpa enim nostrud anim cupidatat exercitation veniam anim eiusmod. Nostrud duis aliqua tempor laborum dolore culpa ex proident sunt do qui.";

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", { home: home, posts: posts });
});
app.get("/about", function (req, res) {
  res.render("about", { about: about });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contact: contact });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.get("/posts/:num", function (req, res) {
  const title = _.lowerCase(req.params.num);
  posts.forEach(function (post) {
    if (_.lowerCase(post.title) === title) {
      res.render("post", { title: post.title, content: post.content });
    }
  });
});

app.post("/compose", function (req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  posts.push(post);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("port 3000 open");
});
