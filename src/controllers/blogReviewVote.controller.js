const BlogReviewVoteService = require("../services/blogReviewVote.service");

class BlogReviewVoteController {
  // Create vote
  static async createVote(req, res) {
    try {
      const vote = await BlogReviewVoteService.addVote(req.body);
      res.status(201).json(vote);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Get votes by review_id
  static async getVotesByReviewId(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogReviewVoteService.getVotesByReviewId(
        req.params.reviewId,
        { limit, offset }
      );

      res.status(200).json({
        total: result.total,
        limit: Number(limit),
        offset: Number(offset),
        data: result.data
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Get all votes
  static async getAllVotes(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogReviewVoteService.getAllVotes({ limit, offset });

      res.status(200).json({
        total: result.total,
        limit: Number(limit),
        offset: Number(offset),
        data: result.data
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Update vote
  static async updateVote(req, res) {
    try {
      const updatedVote = await BlogReviewVoteService.updateVote(req.params.id, req.body);
      res.status(200).json(updatedVote);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Delete vote
  static async deleteVote(req, res) {
    try {
      await BlogReviewVoteService.deleteVote(req.params.id);
      res.status(200).json({ message: "Vote deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = BlogReviewVoteController;
