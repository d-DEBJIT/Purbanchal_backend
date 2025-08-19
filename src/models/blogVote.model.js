const mongoose = require('mongoose');

const BlogVoteSchema = new mongoose.Schema({
  blog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogList' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ip_address: { type: String },
  vote_type: { type: String, enum: ['like', 'dislike'], required: true }
}, { timestamps: true });

BlogVoteSchema.index({ blog_id: 1, user_id: 1 }, { unique: true });
module.exports = mongoose.model('BlogVote', BlogVoteSchema);
