var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
  var hbsObject = {
    burgers: []
  };
  burger.selectAll(function (data) {
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
    res.json({});
  })
});

router.put("/api/burgers/:id", function (req, res) {
  burger.updateOne({devoured: 1}, "id=" + req.params.id, function (data) {
    res.json({});
  })

})






module.exports = router;