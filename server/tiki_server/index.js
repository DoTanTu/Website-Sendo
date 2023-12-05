// app.js
const express = require('express');
const mysql = require('mysql');
require('dotenv').config()
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

const con = mysql.createConnection({
  host: "localhost",
  user: "thanh",
  password: "123456",
  database: "php_project"
});
con.connect(function(err) {
  if (err) throw err;
  const sql = "SELECT * FROM users";
  con.query(sql, function(err, results) {
    if (err) throw err;
    console.log(results);
  })
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});