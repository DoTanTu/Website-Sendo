const cartModel = require('../model/CartModel');
class CartController{
    static getAllCart(req,res){
        const userId = req.user.id;
        cartModel.getAllCart(userId,(error,result)=>{
            if (error) {
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.json(result);
              }
        })
    }
    static async addToCart(req, res) {
        const {product_id, variant_id, quantity } = req.body;
        const userId = req.user.id;
        try {
          await cartModel.addCart(userId, product_id, variant_id, quantity, (err, result) => {
            if (err) {
              console.error('Error adding to cart:', err);
              res.status(500).json({ error: 'Internal Server Error' });
            } else {
              res.status(201).json(result);
            }
          });
        } catch (error) {
          console.error('Error adding to cart:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
}
module.exports = CartController;