// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var connection = require("../config/connection.js")
const newOrm = new orm ("burgers");

let burger = {
  show : function(callback){
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
          throw err;
        }

        return callback(data);
    });
  },
  add : function(name, callback) {
    newOrm.insertOne("burger_name", "devoured", name, 0, function(result) {
      console.log('posted');
      callback(result);
    });
  },
  // add : function(name, callback) {
  //   console.log('burger.js ran');
  //   newOrm.insertOne("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [name, 0], function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log('posted');
  //     callback(result);
  //   });
  // },

  delete : function(id, callback){
    connection.query("DELETE FROM burgers WHERE id = ?", [id], function(err, result) {
      if (err) {
        throw err;
      }
      console.log('deleted again');
      callback(result);
    });
  },

  update : function(id, callback){
    console.log(id); 
    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [1, id
    ], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};


module.exports = burger;
