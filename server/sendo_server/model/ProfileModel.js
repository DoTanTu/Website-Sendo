const db = require('../config/DBConnect');

class ProfileModel {
  static findInfor(id, callback) {
    db.query('SELECT name, email, address, phoneNumber, gender, birthday, is_seller_request_pending  FROM users WHERE id = ?', [id], callback);
  }
//   static createUser(user, callback) {
//     db.query('INSERT INTO users SET ?', user, callback);
//   }
//   static findUserByEmail(email, callback) {  
//       db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
//         if (err) {
//           return callback(err, null);
//         }
//         return callback(null, result.length > 0 ? result[0] : null);
//       });
//   }
//   static updateUserVerification(token, callback) {
//     db.query('UPDATE users SET is_verified = true WHERE verification_token = ?', [token], callback);
//   }
}

module.exports = ProfileModel;

