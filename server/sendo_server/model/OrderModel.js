const db = require("../config/DBConnect");
class OrderModel {
  static async addOrder(
    userId,
    paymentId,
    cartId,
    totalAmount,
    orderDate,
    addressDelivery,
    cartItems
  ) {
    try {
      const orderQuery = `INSERT INTO Orders (user_id, payment_id, order_date, total_amount, address_delivery) VALUES (?, ?, ?, ?, ?)`;
      const orderResult = await db.query(orderQuery, [
        userId,
        paymentId,
        orderDate,
        totalAmount,
        addressDelivery,
      ]);
      const orderId = orderResult.insertId;

      const orderDetailQuery = `INSERT INTO OrderDetails (order_id, cart_id, quantity, price) VALUES (?, ?, ?, ?)`;
      for (const cartItem of cartItems) {
        await db.query(orderDetailQuery, [
          orderId,
          cartItem.cart_id,
          cartItem.quantity,
          cartItem.price,
        ]);
      }

      return orderId;
    } catch (error) {
      console.error("Error adding order:", error);
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
  static async getOrdersDetailByUser(userId) {
    try {
      const query = await db.query(`
      SELECT
          o.order_id,
          u.name AS userName,
          p.product_name AS productName,
          c.product_id,
          od.status,
          pm.payment_name AS payment
      FROM
          OrderDetails od
      JOIN
          Orders o ON od.order_id = o.order_id
      JOIN
          Users u ON o.user_id = u.id
      JOIN
          Carts c ON od.cart_id = c.cart_id
      JOIN
          Products p ON c.product_id = p.id
      JOIN
          PaymentMethod pm ON o.payment_id = pm.payment_id
      WHERE
          o.user_id = ${userId};
    `);
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
