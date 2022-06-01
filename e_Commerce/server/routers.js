const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("./controller");
const {
  passCmd,
  deleteCmd,
  comfirmedCmd,
  getAllCmd,
  getAllCmdConfirmed,
} = require("./controllerCmd");
const router = require("express").Router();
router.post("/product", addProduct);
router.get("/product", getProducts);
router.put("/product/:_id", updateProduct);
router.delete("/product/:_id", deleteProduct);
router.post("/commande", passCmd);
router.delete("/commande/:_id", deleteCmd);
router.put("/commande/:_id", comfirmedCmd);
router.get("/commande", getAllCmd);
router.get("/commande/confirmed", getAllCmdConfirmed);
module.exports = router;
