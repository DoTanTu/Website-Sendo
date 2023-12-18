const db = require('../config/DBConnect');

class UserModel {
  static findUser(email, password, callback) {
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], callback);
  }
  static createUser(user, callback) {
    db.query('INSERT INTO users SET ?', user, callback);
  }
  static findUserByEmail(email, callback) {  
      db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result.length > 0 ? result[0] : null);
      });
  }
  static updateUserVerification(token, callback) {
    db.query('UPDATE users SET is_verified = true WHERE verification_token = ?', [token], callback);
  }
}

module.exports = UserModel;

