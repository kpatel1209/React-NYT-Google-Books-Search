const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = Schema ({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: {},
  image: { type: {} },
  link: { type: String }
})

const Books = mongoose.model("Book", booksSchema);

module.exports = Books;