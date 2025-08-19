const mongoose = require('mongoose');
const BlogTagSchema = new mongoose.Schema({
  name: { type: String },
  slug: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('BlogTag', BlogTagSchema);
