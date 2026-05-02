const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: [true, "Book name is required"],
    minlength: [3, "Book name must be at least 3 characters long"],
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
minlength: [3, "Author name must be at least 3 characters long"],
  },
    publicationYear: {
    type: Number,
    required: [ true, "Publication year is required"],
    min: [1450, "Publication year must be after 1450"],
    max: [new Date().getFullYear(), "Publication year cannot be in the future"],
  },
  price:{
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
    max: [1000, "Price cannot exceed 1000"],
  },
  image:{
    type: String,
    default: "",
    validate: {
      validator: function (v) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(v);
      },
      message: "Invalid image URL",
    }
  }
});

bookSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
bookSchema.set("toJSON", {
  virtuals: true,
});
// const BookModel = mongoose.model("Book", bookSchema);
module.exports = mongoose.model("Book", bookSchema);