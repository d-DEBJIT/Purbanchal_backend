const BlogTagPivotService = require("../services/blogTagPivot.service");

class BlogTagPivotController {
  static async addTag(req, res) {
    try {
      const mapping = await BlogTagPivotService.addTagToBlog(req.body);
      res.status(201).json(mapping);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getAllTags(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogTagPivotService.getAllTags({ limit, offset });

      res.status(200).json({
        total: result.total,
        limit: Number(limit),
        offset: Number(offset),
        data: result.data
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getByBlogId(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogTagPivotService.getByBlogId(req.params.blogId, { limit, offset });

      res.status(200).json({
        total: result.total,
        limit: Number(limit),
        offset: Number(offset),
        data: result.data
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getByTagId(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogTagPivotService.getByTagId(req.params.tagId, { limit, offset });

      res.status(200).json({
        total: result.total,
        limit: Number(limit),
        offset: Number(offset),
        data: result.data
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async removeTag(req, res) {
    try {
      await BlogTagPivotService.removeTag(req.params.id);
      res.status(200).json({ message: "Tag mapping removed successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = BlogTagPivotController;
