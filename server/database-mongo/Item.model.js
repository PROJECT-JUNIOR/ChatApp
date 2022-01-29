const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Item = mongoose.model("Item", itemSchema);
 
module.exports = Item;