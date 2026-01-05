const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/libraryDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// STEP 4: Schema
const bookSchema = new mongoose.Schema({
  bookId: Number,
  title: String,
  author: String,
  price: Number
});

const Book = mongoose.model('Book', bookSchema);

// STEP 5: Read books API
app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});