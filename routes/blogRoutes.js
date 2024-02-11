const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);
// Add other routes for updating and deleting blogs

module.exports = router;