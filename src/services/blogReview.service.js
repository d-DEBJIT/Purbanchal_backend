const BlogReview = require('../models/blogReview.model');
const BlogList = require('../models/blogList.model');
const User = require('../models/user.model');
const BlogReviewVote = require('../models/blogReviewVote.model');

class BlogReviewService {
  // ✅ Create a new review
  static async addReview(data) {
    const { blog_id, user_id, rating, comment } = data;

    const blog = await BlogList.findById(blog_id);
    if (!blog) throw new Error('Blog does not exist');

    const user = await User.findById(user_id);
    if (!user) throw new Error('User does not exist');

    const review = new BlogReview({ blog_id, user_id, rating, comment });
    return await review.save();
  }

  // ✅ Fetch all reviews with optional search + pagination
  static async getAllReviews(query) {
    const { search, page = 1, limit = 10 } = query;
    const filter = {};

    if (search) {
      filter.comment = { $regex: search, $options: 'i' };
    }

    const reviews = await BlogReview.find(filter)
      .populate('blog_id', 'title')
      .populate('user_id', 'name email')
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await BlogReview.countDocuments(filter);

    return { total, page: parseInt(page), limit: parseInt(limit), reviews };
  }

  // ✅ Get reviews by BlogId
  static async getReviewsByBlog(blog_id) {
    return await BlogReview.find({ blog_id })
      .populate('user_id', 'name email')
      .populate('blog_id', 'title');
  }

  // ✅ Get single review by Id
  static async getReviewById(review_id) {
    const review = await BlogReview.findById(review_id)
      .populate('user_id', 'name email')
      .populate('blog_id', 'title');
    if (!review) throw new Error('Review not found');
    return review;
  }

  // ✅ Update review
  static async updateReview(review_id, data) {
    const review = await BlogReview.findByIdAndUpdate(review_id, data, { new: true });
    if (!review) throw new Error('Review not found');
    return review;
  }

  // ✅ Delete review
  static async deleteReview(review_id) {
    const review = await BlogReview.findByIdAndDelete(review_id);
    if (!review) throw new Error('Review not found');
    return { message: 'Review deleted successfully' };
  }

  // ✅ Add or Update Vote (like/dislike)
  static async addOrUpdateVote(review_id, user_id, vote_type) {
    const review = await BlogReview.findById(review_id);
    if (!review) throw new Error('Review not found');

    const user = await User.findById(user_id);
    if (!user) throw new Error('User does not exist');

    const vote = await BlogReviewVote.findOneAndUpdate(
      { review_id, user_id },
      { vote_type },
      { new: true, upsert: true }
    );
    return vote;
  }

  // ✅ Count Likes & Dislikes for a review
  static async countVotes(review_id) {
    const review = await BlogReview.findById(review_id);
    if (!review) throw new Error('Review not found');

    const likes = await BlogReviewVote.countDocuments({ review_id, vote_type: 'like' });
    const dislikes = await BlogReviewVote.countDocuments({ review_id, vote_type: 'dislike' });

    return { review_id, likes, dislikes };
  }
}

module.exports = BlogReviewService;
