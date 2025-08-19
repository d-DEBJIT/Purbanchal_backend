const BlogVote = require("../models/blogVote.model");

class BlogVoteService {
  // Add or update a vote
  static async addOrUpdateVote(data) {
    const { blog_id, user_id, ip_address, vote_type } = data;

    // upsert → if user already voted, update instead of duplicate
    return await BlogVote.findOneAndUpdate(
      { blog_id, user_id },
      { blog_id, user_id, ip_address, vote_type },
      { new: true, upsert: true }
    );
  }

  // Get all votes
  static async getAllVotes() {
    return await BlogVote.find()
      .populate("blog_id")
      .populate("user_id");
  }

  // Get votes by blog
  static async getByBlogId(blogId) {
    return await BlogVote.find({ blog_id: blogId })
      .populate("user_id");
  }

  // Get votes by user
  static async getByUserId(userId) {
    return await BlogVote.find({ user_id: userId })
      .populate("blog_id");
  }

  // Remove a vote
  static async removeVote(id) {
    return await BlogVote.findByIdAndDelete(id);
  }

  // Count votes by blog
  static async countVotes(blogId) {
    const likes = await BlogVote.countDocuments({ blog_id: blogId, vote_type: "like" });
    const dislikes = await BlogVote.countDocuments({ blog_id: blogId, vote_type: "dislike" });

    return { blog_id: blogId, likes, dislikes };
  }
}

module.exports = BlogVoteService;
