const orderModel = require('../model/OrderModel');
class OrderController{    
  static async createOrder(req, res) {
    try {
        const {paymentId, cardId, totalAmount, addressDelivery, cartItems } = req.body;
        const userId = req.user.id;  
        const orderId = await orderModel.addOrder(userId, paymentId, cardId, totalAmount, addressDelivery, cartItems);
        res.json({ success: true, orderId, message: 'Order placed successfully' });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ success: false, message: 'Error placing order' });
    }
}
  static async getOrdersByUser(req, res) {
    const userId = req.user.id;        
    try {
        const orders = await orderModel.getOrdersByUser(userId, req.connection);
        res.status(200).json({ orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }      
  }
  static async getPaymentMethods(req, res) {
    try {
        const paymentMethods = await orderModel.choosePaymentMethod();
        res.status(200).json({ paymentMethods });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async approveOrder(req, res) {
    const { orderId } = req.body;
    try {
        const result = await orderModel.updateOrderStatus(orderId);
        res.status(200).json(result,{ message: 'Order status updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
}
module.exports = OrderController;