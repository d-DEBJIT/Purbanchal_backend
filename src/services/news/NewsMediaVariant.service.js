const NewsMediaVariant = require('../../models/news/NewsMediaVariant.model');

class NewsMediaVariantService {
  static async create(data) {
    const variant = new NewsMediaVariant(data);
    return await variant.save();
  }

  static async getAll({ limit = 10, offset = 0, search = "" }) {
    const filter = {};
    if (search) {
      filter.name = { $regex: search, $options: 'i' }; // Adjust field name as needed
    }
    const total = await NewsMediaVariant.countDocuments(filter);
    const variants = await NewsMediaVariant.find(filter)
      .sort({ name: 1 }) // Adjust field name as needed
      .skip(Number(offset))
      .limit(Number(limit));
    return { total, limit: Number(limit), offset: Number(offset), data: variants };
  }

  static async getById(id) {
    return await NewsMediaVariant.findById(id);
  }

  static async update(id, data) {
    return await NewsMediaVariant.findByIdAndUpdate(id, data, { new: true });
  }

  static async remove(id) {
    return await NewsMediaVariant.findByIdAndDelete(id);
  }
}

module.exports = NewsMediaVariantService;