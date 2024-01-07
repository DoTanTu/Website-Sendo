const db = require('../config/DBConnect');

class ProfileModel {
  static findInfor(id, callback) {
    db.query('SELECT name, email, address, phoneNumber, gender, birthday, is_seller_request_pending, image FROM users WHERE id = ?', [id], callback);
  }

  static async updateProfile(id,{name, address, phoneNumber, gender, birthday,image}){
    try {
      console.log('ID:', id);
      console.log('Values to be updated:', { name, address, phoneNumber, gender, birthday,image });
      const result = await db.query('UPDATE users SET name = ?, address = ?, phoneNumber = ?, gender = ?, birthday = ?, image =? WHERE id = ?', [name, address, phoneNumber, gender, birthday,image ,id]);      
      console.log('Update Result:', result);
      console.log('Profile updated successfully.');
    } catch (error) {
        console.error('Error updating profile:', error);
    }
  }
  
}

module.exports = ProfileModel;

