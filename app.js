const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var ar = ["Continue List..."];
var item = "";
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("list", { array: ar });
});
app.post("/", function (req, res) {
  if (req.body.button == "add") {
    item = req.body.newValue;
    ar.push(item);
    res.redirect("/");
  } else if (req.body.button == "remove") {
    ar.pop();
    res.redirect("/");
  }
});
app.listen(3000, function () {
  console.log("server started on 3000 port");
});
