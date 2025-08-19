const express = require("express");
const blogTagController = require("../controllers/blogTag.controller");

const router = express.Router();

router.post("/",  blogTagController.createTag);
router.get("/",  blogTagController.getAllTags);
router.put("/:id",   blogTagController.updateTag);
router.delete("/:id",  blogTagController.deleteTag);

module.exports = router;
