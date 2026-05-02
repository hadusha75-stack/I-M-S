const express = require("express");
const app = express();
const i18next  = require("i18next");
const backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");


i18next
  .use(backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath: "./locales/{{lng}}.json",
    },
  });

app.use(middleware.handle(i18next));

  app.get("/test", (req, res) => {
    res.send(req.t("Testing"));
  });

const port = 3000;

const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use("/books", require("./routes/books.routes"));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
