const BlogReviewService = require('../services/blogReview.service');

class BlogReviewController {
  static async addReview(req, res) {
    try {
      const review = await BlogReviewService.addReview(req.body);
      res.status(201).json(review);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async getAllReviews(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogReviewService.getAllReviews({ limit, offset, ...req.query });

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

  static async getReviewsByBlog(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogReviewService.getReviewsByBlog(req.params.blogId, { limit, offset });

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

  static async getReviewById(req, res) {
    try {
      const review = await BlogReviewService.getReviewById(req.params.reviewId);
      res.status(200).json(review);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  static async updateReview(req, res) {
    try {
      const review = await BlogReviewService.updateReview(req.params.reviewId, req.body);
      res.status(200).json(review);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  static async deleteReview(req, res) {
    try {
      const response = await BlogReviewService.deleteReview(req.params.reviewId);
      res.status(200).json({ message: 'Deleted successfully', deleted: response });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  static async addOrUpdateVote(req, res) {
    try {
      const vote = await BlogReviewService.addOrUpdateVote(
        req.params.reviewId,
        req.body.user_id,
        req.body.vote_type
      );
      res.status(200).json(vote);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async countVotes(req, res) {
    try {
      const result = await BlogReviewService.countVotes(req.params.reviewId);
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = BlogReviewController;
