const db = require('../config/DBConnect');
class UpdateSellerModel{
    static async getSellerRequest() {
        const result = await db.query('SELECT * FROM users WHERE is_seller_request_pending = 1');
        return result;
    }
    static async updateToSeller(id,{supplier_name,is_seller_request_pending,address_company,brand,date_created_request}){
        try {
            const updateResult = await db.query(
                'UPDATE users SET supplier_name = ?, address_company = ?, brand = ?, is_seller_request_pending = ?, date_created_request = ? WHERE id = ?',
                [supplier_name, address_company, brand, is_seller_request_pending, date_created_request, id]
            );
    
            const checkSellerResult = await db.query('SELECT * FROM sellers WHERE user_id = ?', [id]);
    
            if (checkSellerResult.length === 0) {
                const insertResult = await db.query(
                    'INSERT INTO sellers (user_id, supplier_name, address_company, brand, date_created_request) VALUES (?, ?, ?, ?, ?)',
                    [id, supplier_name, address_company, brand, date_created_request]
                );
    
                return { updateResult, insertResult };
            }
            return { updateResult };
        } catch (error) {
            throw error;
        }
    }
    static async getUserById(userId) {
        try {
            const result = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
            return result[0];
        } catch (error) {
            throw error;
        }
    }
}
module.exports = UpdateSellerModel;