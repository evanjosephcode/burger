var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(vals, cb) {
      orm.insertOne("burgers", "burger_name", vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  
module.exports = burger;
