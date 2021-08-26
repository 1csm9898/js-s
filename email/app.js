const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

// 정적파일 경로 만들기:css, image
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});
app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.post("/", function (req, res) {
  const firstName = req.body.First;
  const lastName = req.body.Last;
  const email = req.body.Email;
  console.log(firstName, lastName, email);
  res.sendFile(__dirname + "/success.html");
  // const data = {
  //   members: [
  //     {
  //       email_address: email,
  //       status: "subscribed",
  //       merge_fields: {
  //         FNAME: firstName,
  //         LNAME: lastName,
  //       },
  //     },
  //   ],
  // };

  // const jsonData = JSON.stringify(data);
  // const url =
  //   "https://us5.api.mailchimp.com/3.0/lists/b9b8928015?skip_merge_validation=true&skip_duplicate_check=true";
  // //'https://<dc>.api.mailchimp.com/3.0/lists/b9b8928015';
  // const options = {
  //   method: "POST",
  //   auth: "sunminchoi:451c6dfd5619c32e210be5d55c4c1287-us5",
  // };
  // const request = https.request(url, options, function (response) {
  //   response.statusCode === 200
  //     ? res.sendFile(__dirname + "/success.html")
  //     : res.sendFile(__dirname + "/faillure.html");
  //   response.on("data", function (data) {
  //     console.log(JSON.parse(data));
  //   });
  //   request.write(jsonData);
  //   request.end();
  // });
});

app.listen(3000, function () {
  console.log("port 3000");
});
//451c6dfd5619c32e210be5d55c4c1287-us5
//b9b8928015
