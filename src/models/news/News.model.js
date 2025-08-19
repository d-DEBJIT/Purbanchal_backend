const mongoose = require("mongoose");
 
const News = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String },
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "NewsCategory", 
    required: false 
  }, // FK-like reference to NewsCategory
  published_at: { type: Date }, // JSON "date"
  read_time: { type: String }, // e.g. "3 min read"
  is_featured: { type: Boolean, default: false },
  size: { 
    type: String, 
    enum: ["small", "medium", "large"], 
    default: "small" 
  },
 
  // Media fields
  media_url: { type: String }, 
  media_type: { 
    type: String, 
    enum: ["image", "video", "file"], 
    default: "image" 
  },
  media_caption: { type: String },
  media_credit: { type: String },
 
  // ✅ New column
  publisher: { type: String }
 
}, { timestamps: true });
 
module.exports = mongoose.model("News", News);