const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
const listCmd = new mongoose.Schema({
  name: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  ref: { type: String },
  quantity: { type: Number },
  status: {
    type: String,
    enum: ["confirmed", "Not confirmed"],
    default: "Not confirmed",
  },
});
const ListCmd = mongoose.model("ListCmd", listCmd);
module.exports = ListCmd;
