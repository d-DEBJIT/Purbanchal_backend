const mongoose = require('mongoose');

const BlogReviewVoteSchema = new mongoose.Schema({
  review_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogReview' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  vote_type: { type: String, enum: ['like', 'dislike'], required: true }
}, { timestamps: true });

BlogReviewVoteSchema.index({ review_id: 1, user_id: 1 }, { unique: true });
module.exports = mongoose.model('BlogReviewVote', BlogReviewVoteSchema);
