const ProductModel = require('../model/ProductModel.js');
const transformData = require('../middleware/TransformData.js')
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
}
module.exports = ProductController;