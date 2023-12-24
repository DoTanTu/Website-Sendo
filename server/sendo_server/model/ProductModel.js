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
}
module.exports = ProductModel;