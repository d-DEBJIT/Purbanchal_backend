const mongoose = require('mongoose');
const BlogListSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogCategory' },
  title: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  content: { type: String },
  excerpt: { type: String },
  thumbnail_url: { type: String },
  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
  is_featured: { type: Boolean, default: false },
  published_at: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('BlogList', BlogListSchema);
