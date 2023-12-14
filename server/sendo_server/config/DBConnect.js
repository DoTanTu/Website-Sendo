const mysql = require('mysql2')
const DB_NAME = 'hkdn';
const DB_USER = 'thanh';
const DB_PASSWORD = '123456';
const DB_HOST = 'localhost';

const conn = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
})
conn.connect(function (err) {
    if (err) {
      console.error('Error connecting to MySQL:', err.message);
      process.exit(1);
    }  
    console.log(DB_NAME + ' Connected successfully');
  });
module.exports = conn;