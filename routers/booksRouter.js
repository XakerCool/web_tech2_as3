const express = require("express");
const router = express.Router();
const bookController = require("../controllers/booksController");
<<<<<<< HEAD
const bookMiddleware = require("../middleware/books.js");

router.get("/", bookController.getAllBooks);
// router.post("/add", bookController.addBook);
router.post("/add", bookMiddleware.isAuthenticated, bookController.addBook);
router.put(
  "/:id/update",
  bookMiddleware.isAuthenticated,
  bookController.updateBook,
);
router.delete(
  "/:id/delete",
  bookMiddleware.isAuthenticated,
  bookController.deleteBook,
);
=======

router.get("/", bookController.getAllBooks);
router.post("/add", bookController.addBook);
router.put("/:id/update", bookController.updateBook);
router.delete("/:id/delete", bookController.deleteBook);
>>>>>>> 32c421696ef396f125a906c42046d77cbcddcc7e

module.exports = router;
