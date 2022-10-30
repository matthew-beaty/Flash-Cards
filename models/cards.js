const mongoose = require("mongoose");

const cardsSchema = new mongoose.Schema({
  front: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Card", cardsSchema);
