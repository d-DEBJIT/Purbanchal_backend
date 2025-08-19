const express = require("express");
const router = express.Router();
const BlogReviewVoteController = require("../controllers/blogReviewVote.controller");

// Create a vote
router.post("/", BlogReviewVoteController.createVote);

// Get votes for a specific review
router.get("/review/:reviewId", BlogReviewVoteController.getVotesByReviewId);

// Get all votes
router.get("/", BlogReviewVoteController.getAllVotes);

// Update vote
router.put("/:id", BlogReviewVoteController.updateVote);

// Delete vote
router.delete("/:id", BlogReviewVoteController.deleteVote);

module.exports = router;
