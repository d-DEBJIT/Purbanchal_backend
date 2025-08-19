const BlogTag = require("../models/blogTag.model");

class BlogTagService {
  static async createTag(data) {
    return await BlogTag.create(data);
  }

  static async getAllTags() {
    return await BlogTag.find();
  }

  static async updateTag(id, data) {
    const tag = await BlogTag.findByPk(id);
    if (!tag) throw new Error("Tag not found");
    return await tag.update(data);
  }

  static async deleteTag(id) {
    const tag = await BlogTag.findByPk(id);
    if (!tag) throw new Error("Tag not found");
    await tag.destroy();
    return { message: "Tag deleted successfully" };
  }
}

module.exports = BlogTagService;
