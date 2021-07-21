const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
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
    status: {
      type: String,
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

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
