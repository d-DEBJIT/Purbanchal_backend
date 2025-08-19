const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogList.controller');

router.get('/', controller.getAllBlogs);    // GET all with filters
router.get('/:id', controller.getBlogById); // GET by ID
router.post('/', controller.createBlog);    // POST
router.put('/:id', controller.updateBlog);  // PUT
router.delete('/:id', controller.deleteBlog); // DELETE

module.exports = router;
