const updateSeller = require('../model/UpdateSellerModel');
class UpdateSellerController{
    static async getSellerRequest(req,res){
        try {
            const sellerRequests = await updateSeller.getSellerRequest();
            return res.status(200).json(sellerRequests);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async updateToSeller(req,res){
        try {
            const {supplier_name,is_seller_request_pending,address_company,brand}= req.body;
        } catch (error) {
            
        }
    }
}
module.exports = UpdateSellerController;