const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogMedia.controller');

router.get('/', controller.getAllMedia);      // GET all with filter
router.get('/:id', controller.getMediaById);  // GET by ID
router.post('/', controller.createMedia);     // POST
router.put('/:id', controller.updateMedia);   // PUT
router.delete('/:id', controller.deleteMedia); // DELETE

module.exports = router;
