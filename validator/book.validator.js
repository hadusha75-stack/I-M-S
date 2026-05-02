


const { body, validationResult, param } = require("express-validator");

const updateBookValidation=[
    param("id").isMongoId().withMessage((value, { req }) => req.t("Invalid book ID")),
    body("bookName")
      .optional()
      .isLength({ min: 3 })
      .withMessage((value, { req }) => req.t("Book name must be at least 3 characters long")),
    body("author")
      .optional()
      .isLength({ min: 3, max: 100 })
      .withMessage(
        (value, { req }) => req.t("Author name must be at least 3 and at most 100 characters long"),
      ),
    body("publicationYear")
      .optional()
      .isInt({ min: 1450, max: new Date().getFullYear() })
      .withMessage((value, { req }) => req.t("Invalid publication year")),
    body("price")
      .optional()
      .isFloat({ min: 1, max: 1000 })
      .withMessage((value, { req }) => req.t("the price must be between 1 and 1000")),
    body("image").optional().isURL().withMessage((value, { req }) => req.t("Invalid image URL")),
  ];
  const createBookValidation= [
      body("bookName")
        .notEmpty()
        .withMessage((value, { req }) => req.t("bookName is required"))
        .isLength({ min: 3 })
        .withMessage((value, { req }) => req.t("Book name must be at least 3 characters long")),
      body("author")
        .notEmpty()
        .withMessage((value, { req }) => req.t("Author name is required"))
        .isLength({ min: 3, max: 100 })
        .withMessage(
          (value, { req }) => req.t("Author name must be at least 3 and at most 100 characters long"),
        ),
      body("publicationYear")
        .notEmpty()
        .withMessage((value, { req }) => req.t("Publication year is required"))
        .isInt({ min: 1450, max: new Date().getFullYear() })
        .withMessage((value, { req }) => req.t("Invalid publication year")),
      body("price")
        .notEmpty()
        .withMessage((value, { req }) => req.t("Price is required"))
        .isFloat({ min: 1, max: 1000 })
        .withMessage((value, { req }) => req.t("the price must be between 1 and 1000")),
      body("image").optional().isURL().withMessage((value, { req }) => req.t("Invalid image URL")),
    ];
    const idValidation=[
      param("id").isMongoId().withMessage((value, { req }) => req.t("Invalid book ID"))
    ];
    const handleResultsValidation=(req, res, next)=>{
        const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
            }
            next();
        }
module.exports={
    updateBookValidation,
    createBookValidation,
    handleResultsValidation,
    idValidation
}