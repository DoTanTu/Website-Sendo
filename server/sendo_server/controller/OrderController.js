const orderModel = require('../model/OrderModel');
class OrderController{    
    static async createOrder(req, res) {
        try {
          const { paymentId, cartId, totalAmount, addressDelivery, cartItems, orderDate } = req.body;
          const userId = req.user.id;
    
          const orderId = await orderModel.addOrder(userId, paymentId, cartId, totalAmount, orderDate, addressDelivery, cartItems);
    
          res.json({ success: true, orderId, message: 'Order placed successfully' });
        } catch (error) {
          console.error('Error placing order:', error);
          res.status(500).json({ success: false, message: 'Error placing order' });
        }
      }
  static async getOrdersByUser(req, res) {
    const userId = req.user.id;        
    try {
        const orders = await orderModel.getOrdersByUser(userId);
        res.status(200).json({ orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }      
  }
  static async getOrdersByUser(req, res) {
    const userId = req.user.id;        
    try {
        const orders = await orderModel.getOrdersByUser(userId);
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
    try {
        const orderId  = req.params.id;
        const result = await orderModel.updateOrderStatus(orderId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async getOrdersBySeller(req,res){
    try {
      const userId = req.user.id;  
      const result = await orderModel.getOrdersBySeller(userId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async getOrdersByDetailSeller(req,res){
    try {
      const userId = req.user.id;  
      const orderID = req.params.id;
      const result = await orderModel.getOrderDetailBySeller(userId,orderID);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
module.exports = OrderController;