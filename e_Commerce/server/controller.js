const Products = require("../database/products");
exports.addProduct = function (req, res) {
  Products.create(req.body)
    .then((data) => res.json({ message: "Product successfuly added", data }))
    .catch((err) => {
      res.status(400).json({ message: "failed add", error: err.message });
    });
};
exports.getProducts = function (req, res) {
  Products.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "products not found", error: err.message });
    });
};
exports.updateProduct = function (req, res) {
  Products.findByIdAndUpdate(req.params._id, req.body)
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to update", error: err.message })
    );
};
exports.getOneProduct = function (req, res) {
  Products.findOne({ ref: req.body.ref })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "product not found", error: err.message });
    });
};
exports.deleteProduct = function (req, res) {
  Products.findByIdAndDelete(req.params._id)
    .then((data) => res.json({ message: "deleted successfully", data }))
    .catch((err) =>
      res.status(404).json({ message: "product not found", error: err.message })
    );
};
