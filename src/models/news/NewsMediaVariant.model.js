const mongoose = require("mongoose");
 
const NewsMediaVariant = new mongoose.Schema({
  news: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "News", 
    required: true 
  },
  url: { type: String, required: true }, // thumbnail/compressed/original
  variant_type: { 
    type: String, 
    enum: ["thumbnail", "medium", "large", "original"], 
    required: true 
  },
  width: { type: Number },
  height: { type: Number }
}, { timestamps: true });
 
module.exports = mongoose.model("NewsMediaVariant", NewsMediaVariant);