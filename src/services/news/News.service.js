const News = require('../../models/news/News.model');

class NewsService {
  static async create(data) {
    const news = new News(data);
    return await news.save();
  }

  static async getAll({ limit = 10, offset = 0, search = "" }) {
    const filter = {};
    if (search) {
      filter.title = { $regex: search, $options: 'i' };
    }
    const total = await News.countDocuments(filter);
    const newsList = await News.find(filter)
      .populate('category', 'name')
      .sort({ published_at: -1 })
      .skip(Number(offset))
      .limit(Number(limit));
    return { total, limit: Number(limit), offset: Number(offset), data: newsList };
  }

  static async getById(id) {
    return await News.findById(id).populate('category', 'name');
  }

  static async update(id, data) {
    return await News.findByIdAndUpdate(id, data, { new: true });
  }

  static async remove(id) {
    return await News.findByIdAndDelete(id);
  }
}

module.exports = NewsService;