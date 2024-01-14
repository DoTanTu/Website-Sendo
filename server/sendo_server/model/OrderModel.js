const db = require('../config/DBConnect');
class OrderModel{
    static async addOrder(user_id, payment_id, address_delivery, cart_ids) {
        try {
            const [orderResult] = await db.query(
              'INSERT INTO Orders (user_id, payment_id, address_delivery) VALUES (?, ?, ?)',
              [user_id, payment_id, address_delivery]
            );
            const orderId = orderResult.insertId;
      
            for (const cartId of cart_ids) {
              await db.query('INSERT INTO OrderCarts (order_id, cart_id) VALUES (?, ?)', [orderId, cartId]);
            }
      
            const [orderDetails] = await db.query(
              'SELECT Carts.product_id, Carts.quantity, Carts.price FROM OrderCarts JOIN Carts ON OrderCarts.cart_id = Carts.cart_id WHERE OrderCarts.order_id = ?',
              [orderId]
            );
      
            for (const detail of orderDetails) {
              await db.query(
                'INSERT INTO OrderDetails (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
                [orderId, detail.product_id, detail.quantity, detail.price]
              );
            }
      
            return { order_id: orderId, success: true, message: 'Order created successfully' };
          } catch (error) {
            throw error;
          }
        }
    static async choosePaymentMethod(){
      try {
        const query = `SELECT * FROM PaymentMethod`;
        const result = db.query(query);
        return result;
      } catch (error) {
        throw error;
      }
    }
}
module.exports = OrderModel;