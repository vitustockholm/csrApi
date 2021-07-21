const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    color: {
      type: String,
      required: true,
    },
    dimensions: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    handmade: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
module.exports = Portfolio;
