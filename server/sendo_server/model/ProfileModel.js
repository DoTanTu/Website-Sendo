const db = require('../config/DBConnect');

class ProfileModel {
  static findInfor(id, callback) {
    db.query('SELECT name, email, address, phoneNumber, gender, birthday, is_seller_request_pending  FROM users WHERE id = ?', [id], callback);
  }

  static async updateProfile(id,{name, address, phoneNumber, gender, birthday,image}){
    try {
      const result = await db.query('UPDATE users SET name = ?, address = ?, phoneNumber = ?, gender = ?, birthday = ?, image =? WHERE id = ?', [name, address, phoneNumber, gender, birthday,image ,id]);      
      return result;
    } catch (error) {
        console.error('Error updating profile:', error);
    }
  }
  
}

module.exports = ProfileModel;

