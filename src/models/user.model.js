const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true }, // will be hashed
  avatar: { type: String, default: "" },
  role: { type: String, enum: ["admin", "editor", "author", "user"], default: "user" },
  status: { type: String, enum: ["active", "inactive", "banned"], default: "active" },
 
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
