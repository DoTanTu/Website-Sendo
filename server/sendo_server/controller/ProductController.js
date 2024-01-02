const ProductModel = require('../model/ProductModel.js');
const transformData = require('../middleware/TransformData.js');
class ProductController{
    static getAllProduct(req,res){
        ProductModel.getAllProduct((error,result)=>{
            if (error) {
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                const dataTrans = transformData.transformData(result);
                res.json(dataTrans);
              }
        })
    }
    static async addNewProduct(req,res){
        try {
          const { product_name, description, users_id, category_id, image, gender, variants } = req.body;
          const result = await ProductModel.create({ product_name, description, users_id, category_id, image, gender }, variants);
          res.status(201).json(result);
        } catch (error) {
          console.error('Error adding product:', error);
          res.status(500).send('Internal Server Error');
        }
    }
    static async updateProduct(req,res){
        try {
          const productId = req.params.productId;
          const { product_name, description, users_id, category_id, image, gender, variants } = req.body;
          const result = await ProductModel.update(productId, {
            product_name,
            description,
            users_id,
            category_id,
            image,
            gender,
        }, variants);
      res.status(200).json(result);
        } catch (error) {
          res.status(500).send('Internal Server Error');
        }
    }
    static async getProductById(req,res){
      try {
        const productId = req.params.productId;
        const result = await ProductModel.getProductById(productId);
        res.status(200).json(result)
      } catch (error) {
        res.status(500).send('Internal Server Error');
      }
    }
    static async deleteProduct(req,res){
      try {
        const productId = req.params.productId;
        const result = await ProductModel.deleteProductById(productId);
        res.status(200).json(result);
      } catch (error) {
        console.error('Error deleting product by ID:', error);
        res.status(500).send('Internal Server Error');
      }
    }
}
module.exports = ProductController;