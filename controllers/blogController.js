const Blog = require("../models/blogModel");
const userModel = require("../models/userModel");

module.exports.createBlog = async (req, res) => {
  try {
    const { _id, title, description } = req.body;
    const blog = Blog.create({ title, description, author: _id });

    return res.json({ blog, status: true });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports.listBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "username email");
    return res.json({ blogs, status: true });
  } catch (error) {
    res.json(error.message);
  }
};
