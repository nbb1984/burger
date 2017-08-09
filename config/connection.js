// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.CLEARDB_DATABASE_URL){
	connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
}

else {
		connection = mysql.createConnection({
		  host: "localhost",
		  user: "root",
		  password: "IDKwImd07",
		  database: "burgers_db"
		});
}
// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
