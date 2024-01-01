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
}
module.exports = ProductController;