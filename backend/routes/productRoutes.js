const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSinglProduct,
} = require("../controllers/productController");
const router = express.Router();

router.route("/product").get(getAllProducts);
router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .get(getSinglProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
