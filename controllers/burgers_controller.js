var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
  var hbsObject = {
    burgers: []
  };
  burger.selectAll(function (data) {
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      hbsObject.burgers.push({
        id: data[i].id,
        burger_name: data[i].burger_name,
        devoured: data[i].devoured ? true : false
      });
    }
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.burger, function (data) {
    console.log(data);
    res.json({});
    // res.redirect("/");  

  })
});




module.exports = router;