const mongoose = require('mongoose');
const BlogMediaSchema = new mongoose.Schema({
  blog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogList' },
  url: { type: String },
  media_type: { type: String, enum: ['image', 'video', 'file'], required: true },
  caption: { type: String },
  uploaded_at: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('BlogMedia', BlogMediaSchema);
