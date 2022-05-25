const {
  addProduct,
  getAllProducts,
  getPublishedProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../contollers/productController");

const router = require("express").Router();

router.post("/addProduct", addProduct);
router.get("/allProduct", getAllProducts);
router.get("/published", getPublishedProduct);

router.get("/:id", getOneProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
