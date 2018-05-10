var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var router = require("./controllers/burgers_controller.js");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, '/public')));


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
}); 