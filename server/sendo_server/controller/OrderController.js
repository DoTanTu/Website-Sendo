const orderModel = require('../model/OrderModel');
class OrderController{
      
    static async createOrder(req,res){
        try {
            const {payment_id, address_delivery, cart_ids } = req.body;
            const user_id = req.user.id;  
            const result = await orderModel.addOrder(user_id, payment_id, address_delivery, cart_ids);
            res.status(201).json(result);
          } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
          }
        }
}
module.exports = OrderController;