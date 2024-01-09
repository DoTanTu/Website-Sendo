const db = require("../config/DBConnect");
class CartModel {
  static getAllCart(userId,callback) {
    const query = `
        SELECT
        Products.product_name,
        Users.supplier_name,
        Users.id,
        Products.image,
        Carts.quantity,
        ProductVariants.price,
        ProductVariants.size_id,
        ProductVariants.color_id
        FROM
        Carts
        JOIN
        Users ON Carts.user_id = Users.id
        JOIN
        Products ON Carts.product_id = Products.id
        JOIN
        ProductVariants ON Carts.variant_id = ProductVariants.variant_id
        Where user_id = ${userId};
        `;
        db.query(query,(error,result)=>{
            if (error) {
                console.error('Error querying database:', error);
                callback(error, null);
              } else {
                callback(null, result);
              }
        });
  }
  static async addCart(user_id, product_id, variant_id, quantity, callback){
    const existingCartItem = await CartModel.getCartItem(user_id, product_id, variant_id);
    if (existingCartItem) {
        const updatedQuantity = existingCartItem.quantity + quantity;
        await CartModel.updateCartQuantity(user_id, product_id, variant_id, updatedQuantity);
        callback(null, { message: 'Cart updated successfully.' });
    }else{
        const query = `
        INSERT INTO Carts (user_id, product_id, variant_id, quantity)
        VALUES (?, ?, ?, ?)
      `;     
      db.query(query, [user_id, product_id, variant_id, quantity], (error, result) => {
        if (error) {
          console.error('Error inserting into database:', error);
          callback(error, null);
        } else {
          callback(null, { message: 'Item added to cart successfully.' });
        }
      });
    }
  }
  static async getCartItem(user_id, product_id, variant_id) {
    const query = `
      SELECT * FROM Carts
      WHERE user_id = ? AND product_id = ? AND variant_id = ?
    `;

    return new Promise((resolve, reject) => {
      db.query(query, [user_id, product_id, variant_id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result[0]);
        }
      });
    });
    }
    static async updateCartQuantity(user_id, product_id, variant_id, quantity) {
        const query = `
          UPDATE Carts
          SET quantity = ?
          WHERE user_id = ? AND product_id = ? AND variant_id = ?
        `;   
        return new Promise((resolve, reject) => {
          db.query(query, [quantity, user_id, product_id, variant_id], (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
      }
}
module.exports = CartModel;
