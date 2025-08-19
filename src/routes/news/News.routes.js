const express = require('express');
const NewsController = require('../../controllers/news/News.controller');

const router = express.Router();

// Create news
router.post('/', NewsController.create);

// Get all news (with search, limit, offset)
router.get('/', NewsController.getAll);

// Get news by ID
router.get('/:id', NewsController.getById);

// Update news
router.put('/:id', NewsController.update);

// Delete news
router.delete('/:id', NewsController.remove);

module.exports = router;