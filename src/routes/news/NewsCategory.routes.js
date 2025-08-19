const express = require('express');
const NewsCategoryController = require('../../controllers/news/NewsCategory.controller');

const router = express.Router();

// Create category
router.post('/', NewsCategoryController.create);

// Get all categories (with search, limit, offset)
router.get('/', NewsCategoryController.getAll);

// Get category by ID
router.get('/:id', NewsCategoryController.getById);

// Update category
router.put('/:id', NewsCategoryController.update);

// Delete category
router.delete('/:id', NewsCategoryController.remove);

module.exports = router;