console.log("Hello, World!");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
console.log("test password:", process.env.TEST_PASSWORD);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB ^_^"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
const bookSchema = mongoose.Schema({
  bookName:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true,
  }
});
app.use(express.json());

BookModel = mongoose.model("Book", bookSchema);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.post("/books", async (req, res) => {
 const newBook = new BookModel(req.body);
 res.status(201).json(newBook);
});