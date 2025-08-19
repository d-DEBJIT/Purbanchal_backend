const BlogList = require('../models/blogList.model');

async function getAll({ fetchKey, keywords, limit, offset }) {
  let filter = {};
  if (fetchKey && keywords) {
    filter[fetchKey] = { $regex: keywords, $options: 'i' };
  }

  const total = await BlogList.countDocuments(filter);
  const data = await BlogList.find(filter)
    .populate('user_id')
    .populate('category_id')
    .skip(Number(offset))
    .limit(Number(limit));

  return { total, data };
}

async function getById(id) {
  const blog = await BlogList.findById(id)
    .populate('user_id')
    .populate('category_id');
  if (!blog) throw new Error('Blog not found');
  return blog;
}

async function create(data) {
  const exists = await BlogList.findOne({ slug: data.slug });
  if (exists) throw new Error('Slug already exists');
  return await BlogList.create(data);
}

async function update(id, data) {
  const blog = await BlogList.findById(id);
  if (!blog) throw new Error('Blog not found');

  if (data.slug && data.slug !== blog.slug) {
    const slugExists = await BlogList.findOne({ slug: data.slug });
    if (slugExists) throw new Error('Slug already in use');
  }

  Object.assign(blog, data);
  await blog.save();
  return blog;
}

async function remove(id) {
  const blog = await BlogList.findByIdAndDelete(id);
  if (!blog) throw new Error('Blog not found or already deleted');
  return blog;
}

module.exports = { getAll, getById, create, update, remove };
