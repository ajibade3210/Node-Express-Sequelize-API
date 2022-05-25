const {
  addProduct,
  getAllProducts,
  getPublishedProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getProductReviews,
} = require("../contollers/productController");
const { addReview, getAllReviews } = require("../contollers/reviewController");

const router = require("express").Router();

//PRODUCTS
router.post("/addProduct", addProduct);
router.get("/allProduct", getAllProducts);
router.get("/published", getPublishedProduct);

router.get("/:id", getOneProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

//UPDATE PRODUCTS
router.get("/get-product-review", getProductReviews);

//REVIEWS
router.post("/add-review", addReview);
router.get("/get-all-reviews", getAllReviews);

module.exports = router;
