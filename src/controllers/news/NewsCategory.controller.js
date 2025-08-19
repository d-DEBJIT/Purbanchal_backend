const NewsCategoryService = require('../../services/news/NewsCategory.service');

class NewsCategoryController {
  static async create(req, res) {
    try {
      const category = await NewsCategoryService.create(req.body);
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const { limit = 10, offset = 0, search = "" } = req.query;
      const result = await NewsCategoryService.getAll({ limit, offset, search });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const category = await NewsCategoryService.getById(req.params.id);
      if (!category) return res.status(404).json({ error: "Category not found" });
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async update(req, res) {
    try {
      const category = await NewsCategoryService.update(req.params.id, req.body);
      if (!category) return res.status(404).json({ error: "Category not found" });
      res.status(200).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async remove(req, res) {
    try {
      const result = await NewsCategoryService.remove(req.params.id);
      if (!result) return res.status(404).json({ error: "Category not found" });
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = NewsCategoryController;