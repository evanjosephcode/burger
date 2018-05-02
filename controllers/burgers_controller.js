var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
  var hbsObject = {
    burgers: []
  };
  burger.selectAll(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      hbsObject.burgers.push({
        id: data[i].id,
        burger_name: data[i].burger_name,
        devoured: data[i].devoured ? true : false
      });
      // burgers[data[i].id] = {
        // burgerName: data[i].burger_name,
        // devoured: data[i].devoured ? true : false
      // }
      // console.log(data[i].devoured);
    }
    // var hbsObject = {
      // burgers: data
    // };
    console.log(JSON.stringify(hbsObject, null, 3));
    res.render("index", hbsObject);
  });
});

router.post("/burger/create", function (req, res) {
  burger.insertOne(req.body.burger, function (data) {
    console.log(data);
    res.redirect("/");  

  })
});




module.exports = router;