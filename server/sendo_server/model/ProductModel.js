const db = require('../config/DBConnect');
class ProductModel{
    static getAllProduct(callback){
        const query = `
        SELECT
            p.id AS product_id,
            p.product_name,
            p.description,
            c.category_name,
            u.supplier_name AS seller_name,
            u.address_company,
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
    static async getProductById(productId){
      try {
        // const getProductById = ` SELECT * FROM Products
        // WHERE id = ?`;
        const getProductById =`SELECT products.*, users.name as name_seller, users.image as image_seller, users.address_company as address_seller
                                FROM products
                                INNER JOIN users ON products.users_id = users.id
                                WHERE products.id = ?`
        const getProductVariantById = `SELECT * FROM ProductVariants
        WHERE product_id = ?`;
        const [product, variants] = await Promise.all([
          db.query(getProductById, [productId]),
          db.query(getProductVariantById, [productId]),
        ]);
        const productWithVariants = { ...product[0], variants };
        return productWithVariants;
      } catch (error) {
        throw error;
      }
    }
    static async update(productId,productData, variantsData){
      try {
        const updateProductQuery = `
          UPDATE Products
          SET product_name = ?, description = ?, users_id = ?, category_id = ?, image = ?, gender = ?
          WHERE id = ?
        `;
        await db.query(updateProductQuery, [
          productData.product_name,
          productData.description,
          productData.users_id,
          productData.category_id,
          productData.image,
          productData.gender,
          productId,
        ]);
          if (variantsData && variantsData.length > 0) {
            for (const variant of variantsData) {
              const updateVariantQuery = `
                UPDATE ProductVariants
                SET price = ?, stock_quantity = ?
                WHERE product_id = ? AND size_id = ? AND color_id = ?
              `;
    
              await db.query(updateVariantQuery, [
                variant.price,
                variant.stock_quantity,
                productId,
                variant.size_id,
                variant.color_id,
              ]);
            }
          }
          return { success: true, message: 'Product updated successfully' };
      } catch (error) {
        throw error;
      }
    }
    static async deleteProductById(productId){
      try {
          const deleteProductQuery = `
          DELETE FROM Products
          WHERE id = ?
        `;
        const deleteVariantsQuery = `
          DELETE FROM ProductVariants
          WHERE product_id = ?
        `;      
        await db.query(deleteVariantsQuery, [productId]);  
        await db.query(deleteProductQuery, [productId]);
        
        return { success: true, message: 'Product deleted successfully' };
      } catch (error) {
        throw error;
      }
    }
  static async getProductBySeller(userID){
    try {
      const query = `
      SELECT
        p.id AS product_id,
        p.product_name,
        p.description,
        c.category_name,
        u.supplier_name AS seller_name,
        u.address_company,
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
      JOIN Colors co ON pv.color_id = co.color_id
      WHERE p.users_id = ?;
        `;
        const productsAndVariants = await db.query(query, [userID]);
        return productsAndVariants;
    } catch (error) {
      throw error;
    }
  }
  static async searchProductByName(keyword){
    try {
      const query = `SELECT
        p.id AS product_id,
        p.product_name,
        p.description,
        c.category_name,
        u.supplier_name AS seller_name,
        u.address_company,
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
      JOIN Colors co ON pv.color_id = co.color_id
      WHERE product_name LIKE ?`;
      const data = await db.query(query,[`%${keyword}%`]);
      return data;
    } catch (error) {
      throw error;
    }
  }
  static async searchAndFilterProductsByPrice(minPrice, maxPrice) {
    try {
      const query = `
        SELECT
          p.id AS product_id,
          p.product_name,
          p.description,
          c.category_name,
          u.supplier_name AS seller_name,
          u.address_company,
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
        JOIN Colors co ON pv.color_id = co.color_id
        WHERE pv.price >= ? AND pv.price <= ?         
      `;
      const data = await db.query(query, [minPrice, maxPrice]);
      return data;
    } catch (error) {
      throw error;
    }
  }
  static async searchAndFilterProductsByGender(gender){
    try {
      const query = `
      SELECT
        p.id AS product_id,
        p.product_name,
        p.description,
        c.category_name,
        u.supplier_name AS seller_name,
        u.address_company,
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
      JOIN Colors co ON pv.color_id = co.color_id
      WHERE p.gender = ?         
    `;
    const data = await db.query(query, [gender]);
    return data;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ProductModel;