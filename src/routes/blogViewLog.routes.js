const express = require("express");
const router = express.Router();
const BlogViewLogController = require("../controllers/blogViewLog.controller");

// Add a new view log
router.post("/", BlogViewLogController.addViewLog);

// Get all logs
router.get("/", BlogViewLogController.getAllLogs);

// Get logs by blogId
router.get("/blog/:blogId", BlogViewLogController.getByBlogId);

// Get logs by userId
router.get("/user/:userId", BlogViewLogController.getByUserId);

// Delete log
router.delete("/:id", BlogViewLogController.removeLog);

module.exports = router;
