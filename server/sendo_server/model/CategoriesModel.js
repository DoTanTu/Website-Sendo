const db = require("../config/DBConnect");
class CategoriesModel {
  static getAllCategories(callback) {
    db.query("SELECT * FROM Categories", callback);
  }
  static createCategories(categoryName, callback) {
    const insertQuery = "INSERT INTO Categories (category_name) VALUES (?)";
    db.query(insertQuery, [categoryName], callback);
  }
  static getCategoryById(categoryId, callback) {
    const selectQuery = "SELECT * FROM Categories WHERE category_id = ?";
    db.query(selectQuery, [categoryId], callback);
  }

  static updateCategory(categoryId, categoryName, callback) {
    const updateQuery =
      "UPDATE Categories SET category_name = ? WHERE category_id = ?";
    db.query(updateQuery, [categoryName, categoryId], callback);
  }

  static deleteCategory(categoryId, callback) {
    const deleteQuery = "DELETE FROM Categories WHERE category_id = ?";
    db.query(deleteQuery, [categoryId], callback);
  }
}
module.exports = CategoriesModel;
