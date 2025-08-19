const express = require('express');
const NewsMediaVariantController = require('../../controllers/news/NewsMediaVariant.controller');

const router = express.Router();

// Create variant
router.post('/', NewsMediaVariantController.create);

// Get all variants (with search, limit, offset)
router.get('/', NewsMediaVariantController.getAll);

// Get variant by ID
router.get('/:id', NewsMediaVariantController.getById);

// Update variant
router.put('/:id', NewsMediaVariantController.update);

// Delete variant
router.delete('/:id', NewsMediaVariantController.remove);

module.exports = router;