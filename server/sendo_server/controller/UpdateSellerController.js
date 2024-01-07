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
    static async updateToSellerRequest(req, res) {
        const { userId, supplier_name, address_company, date_created_request } = req.body;

        try {
            await YourModel.updateToSellerRequest(userId, { supplier_name, address_company, date_created_request });
            res.status(200).json({ message: 'Update successful' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async approveSellerRequest(req, res) {
        const { userId } = req.params;
        const { supplier_name, address_company, date_created_request } = req.body;

        try {
            await YourModel.approveSellerRequest(userId, { supplier_name, address_company, date_created_request });

            // Get the user's email
            const userEmail = await YourModel.getUserEmail(userId);

            // Send email notification
            await sendEmailNotification(userEmail, 'Your seller request has been approved!');

            res.status(200).json({ message: 'Approval successful' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async sendEmailNotification(to, message) {
        const mailOptions = {
            from: process.env.email,
            to,
            subject: 'Seller Request Approval Notification',
            text: message,
        };  
        try {
            await mailer.sendMail(mailOptions);
            console.log('Email sent successfully.');
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}
module.exports = UpdateSellerController;