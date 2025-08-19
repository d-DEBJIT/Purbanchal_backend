require('dotenv').config();
console.log("ENV TEST:", process.env);

const express = require("express");
const mongoose = require("mongoose");;
const userRoutes = require("./routes/user.routes");
const blogCategoryRoutes = require('./routes/blogCategory.routes');
const blogListRoutes = require('./routes/blogList.routes');
const blogMediaRoutes = require('./routes/blogMedia.routes');

const blogTagRoutes = require('./routes/blogTag.routes');
const blogReviewRoutes = require('./routes/blogReview.routes');
const blogReviewVoteRoutes = require('./routes/blogReviewVote.routes');
const blogTagPivotRoutes = require('./routes/blogTagPivot.routes');
const blogViewLogRoutes = require('./routes/blogViewLog.routes');
const blogVoteRoutes = require('./routes/blogVote.routes');

const NewsRoutes = require('./routes/news/News.routes')
const NewsCategoryRoutes = require('./routes/news/NewsCategory.routes')
const NewsMediaVariantRoutes = require('./routes/news/NewsMediaVariant.routes')














const app = express();
app.use(express.json());



// Connect to MongoDB
 mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("MongoDB Connected"))
   .catch(err => console.error(err));

app.use("/api/users", userRoutes);
app.use('/api/blog-categories', blogCategoryRoutes);
app.use('/api/blog-lists', blogListRoutes);
app.use('/api/blog-media', blogMediaRoutes);

app.use('/api/blog-tag', blogTagRoutes);
app.use('/api/blog-review', blogReviewRoutes);
app.use('/api/blog-review-vote', blogReviewVoteRoutes);
app.use('/api/blog-tag-pivot', blogTagPivotRoutes);
app.use('/api/blog-view-log', blogViewLogRoutes);
app.use('/api/blog-vote', blogVoteRoutes);

app.use('/api/news', NewsRoutes);
app.use('/api/news-category', NewsCategoryRoutes);
app.use('/api/news-media-variant', NewsMediaVariantRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
