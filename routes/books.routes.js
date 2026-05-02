const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = express.Router();
const BookModel = require("../models/book.model");
const { param } = require("express-validator");
const {
  idValidation,
  createBookValidation,
  updateBookValidation,
  handleResultsValidation,
} = require("../validator/book.validator");

router.post(
  "/",
  createBookValidation,
  handleResultsValidation,
  async (req, res) => {
    try {
      const newBook = new BookModel(req.body);
      await newBook.save();
      res.status(201).json({
        message: req.t("Booksavedsuccessfully"),
        data: newBook,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  },
);

router.get("/", handleResultsValidation, async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).json({
      message: req.t("Booksretrievedsuccessfully"),
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.get("/:id", idValidation, handleResultsValidation, async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookModel.findById(id);
    if (!book) {
      return res.status(404).json({
        error: req.t("booknotfound"),
      });
    }
    res.status(200).json({
      message: req.t("Bookretrievedsuccessfully"),
      data: book,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.delete(
  "/:id",
  idValidation,
  handleResultsValidation,
  async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBook = await BookModel.findByIdAndDelete(id);
      if (!deletedBook) {
        return res.status(404).json({
          error: req.t("booknotfound"),
        });
      }
      res.status(200).json({
        message: req.t("Bookdeletedsuccessfully"),
        data: deletedBook,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  },
);

// .put for full update and .patch for partial update
router.put(
  "/:id",
  idValidation,
  updateBookValidation,
  handleResultsValidation,
  async (req, res) => {
    try {
      const { id } = req.params;
      const updatedBook = await BookModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedBook) {
        return res.status(404).json({
          error: req.t("booknotfound"),
        });
      }
      res.status(200).json({
        message: req.t("bookUpdated"),
        data: updatedBook,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  },
);

module.exports = router;
