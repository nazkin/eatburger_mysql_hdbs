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

const dbConfig = {
  HOST: "us-cdbr-iron-east-04.cleardb.net",
  USER: "bd6996868c6eef",
  CONNECTION: "9efc0cb3",
  DB: "heroku_1bef034957a67d5"
}

const connection = mysql.createPool({
  host: dbConfig.HOST, 
  user: dbConfig.USER,
  password: dbConfig.CONNECTION,
  database: dbConfig.DB
})


  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  

module.exports = connection;

