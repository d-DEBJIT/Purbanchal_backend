const express = require("express");
const router = express.Router();
const BlogVoteController = require("../controllers/blogVote.controller");

// Add or update a vote
router.post("/", BlogVoteController.addOrUpdateVote);

// Get all votes
router.get("/", BlogVoteController.getAllVotes);

// Get votes by blog
router.get("/blog/:blogId", BlogVoteController.getByBlogId);

// Get votes by user
router.get("/user/:userId", BlogVoteController.getByUserId);

// Remove a vote
router.delete("/:id", BlogVoteController.removeVote);

// Count votes (likes/dislikes) for a blog
router.get("/count/:blogId", BlogVoteController.countVotes);

module.exports = router;
