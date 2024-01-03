const mysql = require('mysql2');
const util = require('util');

const DB_NAME = 'hkdn';
const DB_USER = 'thanh';
const DB_PASSWORD = '123456';
const DB_HOST = 'localhost';
const DB_PORT = 3306;

const conn = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
});
const query = util.promisify(conn.query).bind(conn);
conn.connect(function (err) {
    if (err) {
      console.error('Error connecting to MySQL:', err.message);
      process.exit(1);
    }  
    console.log(DB_NAME + ' Connected successfully');
  });
module.exports = {conn,query};