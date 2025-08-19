const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogCategory.controller');

router.get('/', controller.getAllCategories);   // GET all with filters
router.get('/:id', controller.getCategoryById); // GET by ID
router.post('/', controller.createCategory);    // POST
router.put('/:id', controller.updateCategory);  // PUT
router.delete('/:id', controller.deleteCategory); // DELETE

module.exports = router;
