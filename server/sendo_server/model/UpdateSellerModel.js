const db = require('../config/DBConnect');
class UpdateSellerModel{
    static async getSellerRequest() {
        const result = await db.query('SELECT * FROM users WHERE is_seller_request_pending = 1');
        return result;
    }
    static async updateToSeller(id,{supplier_name,is_seller_request_pending,address_company,brand}){
        const result = await db.query(`UPDATE INTO users SET supplier_name = ?, is_seller_request_pending = 2, address_company = ? , brand = ? WHERE id = ?`,[id,supplier_name,is_seller_request_pending,address_company,brand]);
        return result;
    }
}
module.exports = UpdateSellerModel;