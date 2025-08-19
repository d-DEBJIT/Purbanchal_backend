const mongoose = require('mongoose');

const BlogReviewSchema = new mongoose.Schema({
  blog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogList' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number },
  comment: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('BlogReview', BlogReviewSchema);
