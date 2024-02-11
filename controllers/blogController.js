// controllers/blogController.js
const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('user', 'username');
    res.json(blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { title, description, photo } = req.body;

    // Assuming user ID is stored in req.user.id after authentication
    const userId = req.user.id;

    // Create a new blog
    const blog = new Blog({
      title,
      description,
      photo,
      user: userId
    });

    await blog.save();
    res.json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
