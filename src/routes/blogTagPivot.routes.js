const express = require("express");
const router = express.Router();
const BlogTagPivotController = require("../controllers/blogTagPivot.controller");

// Add a tag to blog
router.post("/", BlogTagPivotController.addTag);

// Get all mappings
router.get("/", BlogTagPivotController.getAllTags);

// Get tags by blogId
router.get("/blog/:blogId", BlogTagPivotController.getByBlogId);

// Get blogs by tagId
router.get("/tag/:tagId", BlogTagPivotController.getByTagId);

// Remove mapping
router.delete("/:id", BlogTagPivotController.removeTag);

module.exports = router;
