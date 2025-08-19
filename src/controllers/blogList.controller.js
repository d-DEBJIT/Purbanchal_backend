const blogListService = require('../services/blogList.service');

exports.getAllBlogs = async (req, res) => {
  try {
    const { fetchKey, keywords, limit = 10, offset = 0 } = req.query;
    const result = await blogListService.getAll({ fetchKey, keywords, limit, offset });
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

exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogListService.getById(req.params.id);
    res.json(blog);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await blogListService.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const updated = await blogListService.update(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const deleted = await blogListService.remove(req.params.id);
    res.json({ message: 'Deleted successfully', deleted });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
