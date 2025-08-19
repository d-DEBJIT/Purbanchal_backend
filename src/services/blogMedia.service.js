const BlogMedia = require('../models/blogMedia.model');

async function getAll({ fetchKey, keywords, limit, offset }) {
  let filter = {};
  if (fetchKey && keywords) {
    filter[fetchKey] = { $regex: keywords, $options: 'i' };
  }

  const total = await BlogMedia.countDocuments(filter);
  const data = await BlogMedia.find(filter)
    .populate('blog_id')
    .skip(Number(offset))
    .limit(Number(limit));

  return { total, data };
}

async function getById(id) {
  const media = await BlogMedia.findById(id).populate('blog_id');
  if (!media) throw new Error('Media not found');
  return media;
}

async function create(data) {
  return await BlogMedia.create(data);
}

async function update(id, data) {
  const media = await BlogMedia.findById(id);
  if (!media) throw new Error('Media not found');

  Object.assign(media, data);
  await media.save();
  return media;
}

async function remove(id) {
  const media = await BlogMedia.findByIdAndDelete(id);
  if (!media) throw new Error('Media not found or already deleted');
  return media;
}

module.exports = { getAll, getById, create, update, remove };
