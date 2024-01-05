const db = require('../config/DBConnect');
class AdminModel{
    static loginAdmin(username,password, callback){
        db.query('SELECT * FROM admin WHERE username = ? and password = ?',[username,password],callback);
    }
}
module.exports = AdminModel;