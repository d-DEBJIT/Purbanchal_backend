const BlogCategory = require('../models/blogCategory.model');

async function getAll({ fetchKey, keywords, limit, offset }) {
  let filter = {};
  if (fetchKey && keywords) {
    filter[fetchKey] = { $regex: keywords, $options: 'i' }; // case-insensitive search
  }

  const total = await BlogCategory.countDocuments(filter);
  const data = await BlogCategory.find(filter)
    .skip(Number(offset))
    .limit(Number(limit));

  return { total, data };
}

async function getById(id) {
  const category = await BlogCategory.findById(id).populate('parent_id');
  if (!category) throw new Error('Category not found');
  return category;
}

async function create(data) {
  const exists = await BlogCategory.findOne({ slug: data.slug });
  if (exists) throw new Error('Slug already exists');
  return await BlogCategory.create(data);
}

async function update(id, data) {
  const category = await BlogCategory.findById(id);
  if (!category) throw new Error('Category not found');

  // If slug is updated, check uniqueness
  if (data.slug && data.slug !== category.slug) {
    const slugExists = await BlogCategory.findOne({ slug: data.slug });
    if (slugExists) throw new Error('Slug already in use');
  }

  Object.assign(category, data);
  await category.save();
  return category;
}

async function remove(id) {
  const category = await BlogCategory.findByIdAndDelete(id);
  if (!category) throw new Error('Category not found or already deleted');
  return category;
}

module.exports = { getAll, getById, create, update, remove };
