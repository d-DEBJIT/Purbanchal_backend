const NewsService = require('../../services/news/News.service');

class NewsController {
  static async create(req, res) {
    try {
      const news = await NewsService.create(req.body);
      res.status(201).json(news);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const { limit = 10, offset = 0, search = "" } = req.query;
      const result = await NewsService.getAll({ limit, offset, search });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const news = await NewsService.getById(req.params.id);
      if (!news) return res.status(404).json({ error: "News not found" });
      res.status(200).json(news);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async update(req, res) {
    try {
      const news = await NewsService.update(req.params.id, req.body);
      if (!news) return res.status(404).json({ error: "News not found" });
      res.status(200).json(news);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async remove(req, res) {
    try {
      const result = await NewsService.remove(req.params.id);
      if (!result) return res.status(404).json({ error: "News not found" });
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = NewsController;