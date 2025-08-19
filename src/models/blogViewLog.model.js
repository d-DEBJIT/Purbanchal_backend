const mongoose = require('mongoose');

const BlogViewLogSchema = new mongoose.Schema({
  blog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogList' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ip_address: { type: String },
  user_agent: { type: String },
  viewed_at: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('BlogViewLog', BlogViewLogSchema);
