const blogMediaService = require('../services/blogMedia.service');

exports.getAllMedia = async (req, res) => {
  try {
    const { fetchKey, keywords, limit = 10, offset = 0 } = req.query;
    const result = await blogMediaService.getAll({ fetchKey, keywords, limit, offset });
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

exports.getMediaById = async (req, res) => {
  try {
    const media = await blogMediaService.getById(req.params.id);
    res.json(media);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.createMedia = async (req, res) => {
  try {
    const media = await blogMediaService.create(req.body);
    res.status(201).json(media);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMedia = async (req, res) => {
  try {
    const updated = await blogMediaService.update(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMedia = async (req, res) => {
  try {
    const deleted = await blogMediaService.remove(req.params.id);
    res.json({ message: 'Deleted successfully', deleted });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
