const db = require('../config/DBConnect');
class UpdateSellerModel{
    static async getSellerRequest() {
        const result = await db.query('SELECT * FROM users WHERE is_seller_request_pending = 1');
        return result;
    }
    static async updateToSellerRequest(id, { supplier_name, address_company, date_created_request }) {
        try {
            const result = await db.query(
                'UPDATE users SET supplier_name = ?, address_company = ?, date_created_request = ?, is_seller_request_pending = 1 WHERE id = ?',
                [supplier_name, address_company, date_created_request, id]
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async approveSellerRequest(userId) {
        try {
            const result = await db.query(
                'UPDATE users SET is_seller_request_pending = 2, is_Seller = 1 WHERE id = ?',
                [userId]
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getUserEmail(userId) {
        try {
            const result = await db.query('SELECT email FROM users WHERE id = ?', [userId]);
            return result[0].email;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = UpdateSellerModel;