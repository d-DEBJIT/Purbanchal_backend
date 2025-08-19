const blogTagService = require("../services/blogTag.service");

// Get all tags
exports.getAllTags = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const result = await blogTagService.getAllTags({ limit, offset });

    res.status(200).json({
      total: result.total,
      limit: Number(limit),
      offset: Number(offset),
      data: result.data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new tag
exports.createTag = async (req, res) => {
  try {
    const tag = await blogTagService.createTag(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a tag
exports.updateTag = async (req, res) => {
  try {
    const updated = await blogTagService.updateTag(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a tag
exports.deleteTag = async (req, res) => {
  try {
    const deleted = await blogTagService.deleteTag(req.params.id);
    res.json({ message: "Deleted successfully", deleted });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
