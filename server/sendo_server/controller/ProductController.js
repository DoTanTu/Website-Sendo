const ProductModel = require('../model/ProductModel.js');
const transformData = require('../middleware/TransformData.js');
class ProductController{
    static getAllProduct(req,res){
        const { page = 1, pageSize = 10 } = req.query;
        const offset = (page - 1) * pageSize;
        const countProduct = ProductModel.countResults((error, result) => {
          if (error) {
            res.status(404).json({ error: "count product error" });
          } else {
            const totalCount = result[0]['count(*)']; // Lấy giá trị count(*) từ kết quả
            const totalPages = Math.ceil(totalCount / pageSize);
        
            ProductModel.getAllProduct((error, result) => {
              if (error) {
                res.status(500).json({ error: "Internal Server Error" });
              } else {
                const dataTrans = transformData.transformData(result);
                const offset = (page - 1) * pageSize;
                const slicedData = dataTrans.slice(offset, offset + pageSize);
                res.json({
                   dataTrans: slicedData,
                  totalPages
                });
              }
            });
          }
        });
        
        
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
    static async getProductBySeller(req,res){
      try {
        const sellerId = req.params.sellerId;
        const products = await ProductModel.getProductBySeller(sellerId);
        const dataTrans = transformData.transformData(products);
        res.status(200).json(dataTrans);
      } catch (error) {
        res.status(500).send('Internal Server Error');
      }
    }
    static async searchProductByName(req,res){
      try {
        const keyword  = req.params.name;
        const data = await ProductModel.searchProductByName(keyword);
        const dataTrans = transformData.transformData(data);
        res.status(200).json(dataTrans);
      } catch (error) {
        res.status(500).send('Internal Server Error');
      }
    }
    static async searchAndFilterProductsByPrice(req, res) {
      try {
        const { minPrice, maxPrice } = req.params;
        const data = await ProductModel.searchAndFilterProductsByPrice(minPrice, maxPrice);  
        const dataTrans = transformData.transformData(data);
        res.status(200).json(dataTrans);
        console.log(dataTrans);
      } catch (error) {
        console.error('Error searching and filtering products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
    static async searchAndFilterProductsByGender(req, res) {
      try {
        const { gender } = req.params;
        const data = await ProductModel.searchAndFilterProductsByGender(gender);  
        const dataTrans = transformData.transformData(data);
        res.status(200).json(dataTrans);
        console.log(dataTrans);
      } catch (error) {
        console.error('Error searching and filtering products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
    static async searchAndFilterProducts(req, res) {
      try {
        const {sortOrder } = req.params;
        console.log(sortOrder);
        const data = await ProductModel.searchAndSortProductsByPrice(sortOrder);
        const dataTrans = transformData.transformData(data);
        res.status(200).json(dataTrans);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
}
module.exports = ProductController;