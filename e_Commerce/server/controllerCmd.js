const ListCmd = require("../database/listCmds");
exports.passCmd = function (req, res) {
  ListCmd.create(req.body)
    .then((data) => res.json({ message: "commande successfuly passed", data }))
    .catch((err) => {
      res.status(400).json({ message: "failed post", error: err.message });
    });
};
exports.deleteCmd = function (req, res) {
  ListCmd.findByIdAndDelete(req.params._id)
    .then((data) => res.json({ message: "deleted successfully", data }))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "commande not found", error: err.message })
    );
};
exports.comfirmedCmd = function (req, res) {
  ListCmd.findByIdAndUpdate(req.params._id, { status: "confirmed" })
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to update", error: err.message })
    );
};
exports.getAllCmd = function (req, res) {
  ListCmd.find({ status: "Not confirmed" })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "commands not found", error: err.message });
    });
};
exports.getAllCmdConfirmed = function (req, res) {
  ListCmd.find({ status: "confirmed" })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "commands not found", error: err.message });
    });
};
