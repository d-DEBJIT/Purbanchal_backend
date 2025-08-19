const mongoose = require('mongoose');

const BlogTagPivotSchema = new mongoose.Schema({
  blog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogList' },
  tag_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogTag' }
}, { timestamps: true });

module.exports = mongoose.model('BlogTagPivot', BlogTagPivotSchema);
