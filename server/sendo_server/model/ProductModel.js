const db = require('../config/DBConnect');
class ProductModel{
    static getAllProduct(callback){
        const query = `
        SELECT
            p.id AS product_id,
            p.product_name,
            p.description,
            p.gender,
            c.category_name,
            u.supplier_name AS seller_name,
            u.address,
            p.image,
            pv.variant_id,
            s.size_name,
            co.color_name,
            pv.price,
            pv.stock_quantity
        FROM Products p
        JOIN Categories c ON p.category_id = c.category_id
        JOIN Users u ON p.users_id = u.id
        JOIN ProductVariants pv ON p.id = pv.product_id
        JOIN Sizes s ON pv.size_id = s.size_id
        JOIN Colors co ON pv.color_id = co.color_id;
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
    static async create(productData, variantsData) {
        try {
          // Insert product
          const insertProductQuery = `
            INSERT INTO Products (product_name, description, users_id, category_id, image, gender)
            VALUES (?, ?, ?, ?, ?, ?)
          `;
      
          const productResult = await db.query(insertProductQuery, [
            productData.product_name,
            productData.description,
            productData.users_id,
            productData.category_id,
            productData.image,
            productData.gender
          ]);
      
          const productId = productResult.insertId;
      
          // Prepare data for variant insertion
          const variantValues = variantsData.map((variant) => [
            productId,
            variant.color_id,
            variant.size_id,
            variant.price,
            variant.stock_quantity
          ]);
      
          // Insert variants using async/await
          for (const values of variantValues) {
            const insertVariantQuery = `
              INSERT INTO ProductVariants (product_id, color_id, size_id, price, stock_quantity)
              VALUES (?, ?, ?, ?, ?)
            `;
      
            await db.query(insertVariantQuery, values);
          }
      
          return productId;
        } catch (error) {
          throw error;
        }
      }
      
}
module.exports = ProductModel;