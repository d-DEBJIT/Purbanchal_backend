const BlogViewLog = require("../models/blogViewLog.model");

class BlogViewLogService {
  // Add a view log
  static async addViewLog(data) {
    const logData = {
      ...data,
      viewed_at: data.viewed_at || new Date()
    };
    const log = new BlogViewLog(logData);
    return await log.save();
  }

  // Get all logs
  static async getAllLogs() {
    return await BlogViewLog.find()
      .populate("blog_id")
      .populate("user_id");
  }

  // Get logs by blogId
  static async getByBlogId(blogId) {
    return await BlogViewLog.find({ blog_id: blogId })
      .populate("user_id");
  }

  // Get logs by userId
  static async getByUserId(userId) {
    return await BlogViewLog.find({ user_id: userId })
      .populate("blog_id");
  }

  // Delete a log
  static async removeLog(id) {
    return await BlogViewLog.findByIdAndDelete(id);
  }
}

module.exports = BlogViewLogService;
