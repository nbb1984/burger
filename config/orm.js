// Import connection.
var connection = require("./connection.js");

// Helper function for SQL syntax.
var orm =  function (tableName){
    this.tableName = tableName;
// INSERT INTO burgers (burger_name, devoured)  VALUES ("Onion and Swiss", 0);
    
    this.insertOne = function(column1, column2, val1, val2, cb) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [this.tableName, column1, column2, val1 , val2], function(err, result){
          console.log('error');
          if (err) {
            throw err;
          } 
          console.log('no error');
          cb(result);
          });
        }
    };

// Object for all our SQL statement functions.
// var orm = {
//   selectAll: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },

//   insertOne: function(table, col, boolean, vals, cb) {
//     var queryString = "INSERT INTO " + table;
// //INSERT INTO burgers (burger_name, devoured)  VALUES ("Onion and Swiss", 0);
//     queryString += " (";
//     queryString += col.toString();
//     queryString += ",";
//     queryString += boolean.toString();
//     queryString +=  ") VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   // An example of objColVals would be {name: panther, sleepy: true}
//   updateOne: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   }
// };

// Export the orm object for the model.
module.exports = orm;
