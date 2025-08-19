const categoryService = require('../services/blogCategory.service');

exports.getAllCategories = async (req, res) => {
  try {
    const { fetchKey, keywords, limit = 10, offset = 0 } = req.query;
    const result = await categoryService.getAll({ fetchKey, keywords, limit, offset });
    res.json({
      total: result.total,
      limit: Number(limit),
      offset: Number(offset),
      data: result.data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getById(req.params.id);
    res.json(category);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = await categoryService.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const updated = await categoryService.update(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await categoryService.remove(req.params.id);
    res.json({ message: 'Deleted successfully', deleted });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
