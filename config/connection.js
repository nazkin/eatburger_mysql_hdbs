const mysql = require('mysql');


// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "19935ert7",
//     database: "burgers_db"
// });
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

const connection = mysql.createPool({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "bd6996868c6eef",
  connection: "9efc0cb3",
  database: "heroku_1bef034957a67d5"
})


  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  

module.exports = connection;

// {
//   username:bd6996868c6eef,
//   password: 9efc0cb3, 
//   host: us-cdbr-iron-east-04.cleardb.net,
//   database: heroku_1bef034957a67d5
// }