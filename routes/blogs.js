const { createBlog, listBlogs } = require("../controllers/blogController");
const router = require("express").Router();

router.post("/create", createBlog);
router.get("/list", listBlogs);

module.exports = router;
