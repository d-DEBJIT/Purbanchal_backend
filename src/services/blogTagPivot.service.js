const BlogTagPivot = require("../models/blogTagPivot.model");

class BlogTagPivotService {
  // Add tag to a blog
  static async addTagToBlog(data) {
    const { blog_id, tag_id } = data;
    const mapping = new BlogTagPivot({ blog_id, tag_id });
    return await mapping.save();
  }

  // Get all tag mappings
  static async getAllTags() {
    return await BlogTagPivot.find()
      .populate("blog_id")
      .populate("tag_id");
  }

  // Get tags by blog ID
  static async getByBlogId(blogId) {
    return await BlogTagPivot.find({ blog_id: blogId })
      .populate("tag_id");
  }

  // Get blogs by tag ID
  static async getByTagId(tagId) {
    return await BlogTagPivot.find({ tag_id: tagId })
      .populate("blog_id");
  }

  // Remove a tag mapping
  static async removeTag(mappingId) {
    return await BlogTagPivot.findByIdAndDelete(mappingId);
  }
}

module.exports = BlogTagPivotService;
