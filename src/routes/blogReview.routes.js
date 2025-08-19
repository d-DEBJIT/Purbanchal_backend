const express = require('express');
const BlogReviewController = require('../controllers/blogReview.controller');

const router = express.Router();

// ➕ Create review
router.post('/', BlogReviewController.addReview);

// 📄 Get all reviews (with search + pagination)
router.get('/', BlogReviewController.getAllReviews);

// 📄 Get reviews by Blog ID
router.get('/blog/:blogId', BlogReviewController.getReviewsByBlog);

// 📄 Get review by Review ID
router.get('/:reviewId', BlogReviewController.getReviewById);

// ✏️ Update review
router.put('/:reviewId', BlogReviewController.updateReview);

// ❌ Delete review
router.delete('/:reviewId', BlogReviewController.deleteReview);

// 👍👎 Add or Update Vote
router.post('/:reviewId/vote', BlogReviewController.addOrUpdateVote);

// 🔢 Count Likes & Dislikes
router.get('/:reviewId/votes', BlogReviewController.countVotes);

module.exports = router;
