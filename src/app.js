// src/app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

// Import routes
const blogReviewRoutes = require("./routes/blogReview.routes");

const app = express();

// -------------------- Middleware --------------------
app.use(helmet()); // Adds security headers
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form-data
app.use(morgan("dev")); // Logging middleware

// -------------------- Routes --------------------
app.get("/", (req, res) => {
  res.json({ message: "Purbanchal Backend API is running 🚀" });
});

// Blog Review routes
app.use("/api/blog-reviews", blogReviewRoutes);

// -------------------- Error Handling --------------------

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

module.exports = app;
