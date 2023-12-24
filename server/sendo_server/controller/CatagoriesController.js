const categoriesModel = require('../model/CategoriesModel');
class CategoriesController{
    static getAllCategories(req,res){
        categoriesModel.getAllCategories((error,result)=>{
            if (error) {
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.json(result);
              }
        })
    }
    static createCategories(req, res) {
      const { category_name } = req.body;
      categoriesModel.createCategories(category_name, (error, result) => {
        if (error) {
          console.error('Error in creating category:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        res.status(201).json({ message: 'Category created successfully', data: result });
      });
    }
    static getCategoryById(req, res) {
      const categoryId = req.params.id;
  
      categoriesModel.getCategoryById(categoryId, (error, result) => {
        if (error) {
          console.error('Error getting category by ID:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        if (!result || result.length === 0) {
          return res.status(404).json({ error: 'Category not found' });
        }
  
        res.status(200).json({ data: result[0] });
      });
    }
  
    static updateCategory(req, res) {
      const categoryId = req.params.id;
      const { category_name } = req.body;
  
      categoriesModel.updateCategory(categoryId, category_name, (error, result) => {
        if (error) {
          console.error('Error updating category:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        res.status(200).json({ message: 'Category updated successfully', data: result });
      });
    }
  
    static deleteCategory(req, res) {
      const categoryId = req.params.id;
  
      categoriesModel.deleteCategory(categoryId, (error, result) => {
        if (error) {
          console.error('Error deleting category:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        res.status(200).json({ message: 'Category deleted successfully', data: result });
      });
    }
}
module.exports = CategoriesController;