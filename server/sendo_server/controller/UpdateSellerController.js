const updateSeller = require('../model/UpdateSellerModel');
const mailer = require('../config/Mailer');
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
        const { supplier_name, address_company, brand, is_seller_request_pending } = req.body;
        const userId = req.user.id;
        try {
            const updatedUser = await updateSeller.getUserById(userId);  
            if (updatedUser.is_seller_request_pending !== 1) {
                return res.status(400).json({ error: 'User is not pending for seller approval.' });
            }   
            const result = await updateSeller.updateToSeller(userId, {
                supplier_name,
                address_company,
                brand,
                is_seller_request_pending: 2,
            });    
            const mailOptions = {
                to: updatedUser.email,
                subject: 'Account Approved',
                html: sellerApprovalEmail(),
            };    
            mailer.sendMail(mailOptions, (mailError, info) => {
                if (mailError) {
                    console.error(mailError);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                console.log(`Email sent: ${info.response}`);
                res.status(200).json(result);
            });
        } catch (error) {
            console.error('Error in updateToSeller:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
module.exports = UpdateSellerController;