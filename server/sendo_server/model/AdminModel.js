const db = require('../config/DBConnect');
class AdminModel{
    static loginAdmin(email,password, callback){
        db.query('SELECT * FROM admin WHERE email = ? and password = ?',[email,password],callback);
    }
}
module.exports = AdminModel;