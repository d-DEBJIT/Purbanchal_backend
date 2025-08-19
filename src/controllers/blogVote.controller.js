const BlogVoteService = require("../services/blogVote.service");

class BlogVoteController {
  static async addOrUpdateVote(req, res) {
    try {
      const vote = await BlogVoteService.addOrUpdateVote(req.body);
      res.status(201).json(vote);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getAllVotes(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogVoteService.getAllVotes({ limit, offset });

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

  static async getByBlogId(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogVoteService.getByBlogId(req.params.blogId, { limit, offset });

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

  static async getByUserId(req, res) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const result = await BlogVoteService.getByUserId(req.params.userId, { limit, offset });

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

  static async removeVote(req, res) {
    try {
      await BlogVoteService.removeVote(req.params.id);
      res.status(200).json({ message: "Vote removed successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async countVotes(req, res) {
    try {
      const result = await BlogVoteService.countVotes(req.params.blogId);
      res.status(200).json(result); 
      // 👉 or wrap it if you want standard structure
      /*
      res.status(200).json({
        total: result.total,
        limit: 0,
        offset: 0,
        data: [result]
      });
      */
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = BlogVoteController;
