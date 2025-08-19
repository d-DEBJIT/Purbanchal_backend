const BlogReviewVote = require("../models/blogReviewVote.model");

class BlogReviewVoteService {
  // Add new vote
  static async addVote(data) {
    try {
      const vote = new BlogReviewVote(data);
      return await vote.save();
    } catch (err) {
      throw err;
    }
  }

  // Get votes by review_id
  static async getVotesByReviewId(reviewId) {
    try {
      return await BlogReviewVote.find({ review_id: reviewId })
        .populate("user_id", "username email")
        .populate("review_id");
    } catch (err) {
      throw err;
    }
  }

  // Get all votes
  static async getAllVotes() {
    try {
      return await BlogReviewVote.find()
        .populate("user_id", "username email")
        .populate("review_id");
    } catch (err) {
      throw err;
    }
  }

  // Update vote (like → dislike, etc.)
  static async updateVote(id, data) {
    try {
      return await BlogReviewVote.findByIdAndUpdate(id, data, { new: true });
    } catch (err) {
      throw err;
    }
  }

  // Delete vote
  static async deleteVote(id) {
    try {
      return await BlogReviewVote.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = BlogReviewVoteService;
