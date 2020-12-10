const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Sneaker = new Schema({
  name: String,
  ref: String,
  size: Number,
  description: String,
  price: Number,
  category: { type: String, enum: ["men", "women", "kids"] },
  //[id_tags: [ObjectId]
});
const SneakerModel = mongoose.model("sneaker", Sneaker);
module.exports = SneakerModel;
