const express = require("express");
const CategoriesController = require('../controller/CatagoriesController');
const router = express.Router();
router.get('/categories', CategoriesController.getAllCategories);
router.post('/categories/create',CategoriesController.createCategories);
router.get('/categories/:id', CategoriesController.getCategoryById);
router.put('/categories/update/:id', CategoriesController.updateCategory);
router.delete('/categories/:id', CategoriesController.deleteCategory);
module.exports = router;