const db = require('../config/DBConnect');

class UserModel {
  static findUser(email, password, callback) {
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], callback);
  }
}

module.exports = UserModel;

