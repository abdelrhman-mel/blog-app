const express = require('express');
const connectDB = require('./config/config');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;

// MongoDB connection
mongoose
.connect('mongodb://admin:admin@localhost:27017/blog?authSource=admin')
.then(() => console.log('connected to DB...'))
.catch((err) => console.log('failed to connect to DB ', err));

//bodyparser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/blogs', require('./routes/blogRoutes'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });