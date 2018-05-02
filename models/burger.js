var orm = require("../config/orm.js");


var burger = {
    // The variables cols and vals are arrays.
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(vals, cb) {
      orm.insertOne("burgers", ["burger_name", "devoured"], [vals, false], cb)
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  
module.exports = burger;
