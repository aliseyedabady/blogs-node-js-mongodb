const Blog = require("../models/blogModel");
const userModel = require("../models/userModel");
const { blogValidate } = require("../validations");

module.exports.createBlog = async (req, res) => {
  try {
    const data = blogValidate(req);
    if (data.error) return res.json({ msg: data.error.details[0].message });
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
