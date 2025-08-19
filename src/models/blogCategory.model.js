const mongoose = require('mongoose');

const BlogCategorySchema = new mongoose.Schema({
  parent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogCategory', default: null },
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  description: { type: String },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('BlogCategory', BlogCategorySchema);
