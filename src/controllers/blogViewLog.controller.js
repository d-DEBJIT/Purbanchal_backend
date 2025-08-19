const BlogViewLogService = require("../services/blogViewLog.service");

class BlogViewLogController {
  static async addViewLog(req, res) {
    try {
      const log = await BlogViewLogService.addViewLog(req.body);
      res.status(201).json(log);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getAllLogs(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogViewLogService.getAllLogs({ limit, offset });

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
      const result = await BlogViewLogService.getByBlogId(req.params.blogId, { limit, offset });

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

  static async getByUserId(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogViewLogService.getByUserId(req.params.userId, { limit, offset });

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

  static async removeLog(req, res) {
    try {
      await BlogViewLogService.removeLog(req.params.id);
      res.status(200).json({ message: "Log removed successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = BlogViewLogController;
