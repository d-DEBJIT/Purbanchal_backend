const NewsCategory = require('../../models/news/newsCategory.model');

class NewsCategoryService {
  static async create(data) {
    const category = new NewsCategory(data);
    return await category.save();
  }

  static async getAll({ limit = 10, offset = 0, search = "" }) {
    const filter = {};
    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }
    const total = await NewsCategory.countDocuments(filter);
    const categories = await NewsCategory.find(filter)
      .sort({ name: 1 })
      .skip(Number(offset))
      .limit(Number(limit));
    return { total, limit: Number(limit), offset: Number(offset), data: categories };
  }

  static async getById(id) {
    return await NewsCategory.findById(id);
  }

  static async update(id, data) {
    return await NewsCategory.findByIdAndUpdate(id, data, { new: true });
  }

  static async remove(id) {
    return await NewsCategory.findByIdAndDelete(id);
  }
}

module.exports = NewsCategoryService;