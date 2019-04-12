const router = require("express").Router();
const booksRoutes = require("./booksRoutes");

// Books routes
router.use("/books", booksRoutes);

module.exports = router;