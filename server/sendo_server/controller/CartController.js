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
    static deleteProductInCart(req,res){
      const cartId = req.params.id;
      cartModel.deleteProduct(cartId, (error, result) => {
        if (error) {
          console.error('Error deleting cart:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }  
        res.status(200).json({ message: 'Cart deleted successfully', data: result });
      });
    }
    static async updateVariant(req, res) {
      try {
        const { variant_id } = req.body;
        const cartId = req.params.id;
        const userId = req.user.id;
  
        const result = await cartModel.updateVariantInCart(userId, cartId, variant_id);
  
        res.status(200).json(result);
        console.log('Update cart successfully');
      } catch (error) {
        console.error('Error updating cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
}
module.exports = CartController;