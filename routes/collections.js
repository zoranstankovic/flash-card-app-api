const express = require("express");
const {
  getCollections,
  getCollection,
  createCollection,
  updateCollection,
  deleteCollection
} = require("../controllers/collections");

const router = express.Router();

router
  .route("/")
  .get(getCollections)
  .post(createCollection);

router
  .route("/:id")
  .get(getCollection)
  .put(updateCollection)
  .delete(deleteCollection);

module.exports = router;
