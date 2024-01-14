const db = require("../config/DBConnect");
class OrderModel {
  static async addOrder(userId, paymentId, cardId, totalAmount, addressDelivery, cartItems) {
    try {
      const orderQuery = `INSERT INTO Orders (user_id, payment_id, card_id, order_date, total_amount, address_delivery) VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?, ?)`;
      const [orderResult] = await db.query(orderQuery, [userId, paymentId, cardId, totalAmount, addressDelivery]);
      const orderId = orderResult.insertId;
      const orderDetailQuery = `INSERT INTO OrderDetails (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)`;
      for (const cartItem of cartItems) {
        await db.query(orderDetailQuery, [orderId, cartItem.product_id, cartItem.quantity, cartItem.price]);
      }
      return orderId;
    } catch (error) {
      console.error('Error adding order:', error);
      throw error;
    }
  }
  
  static async choosePaymentMethod() {
    try {
      const query = `SELECT * FROM PaymentMethod`;
      const result = db.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getOrdersByUser(userId) {
    try {
      const query = `
        SELECT * FROM Orders
        WHERE user_id = ${userId}
        ORDER BY order_date DESC;
      `;
      const result = await db.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateOrderStatus(orderId, newStatus) {
    try {
      const updateQuery = `
              UPDATE Orders
              SET status = 1
              WHERE order_id = ?;
          `;
      const result = await db.query(updateQuery, [newStatus, orderId]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = OrderModel;
