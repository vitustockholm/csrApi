const Order = require('../models/order');

const putOrder = (req, res) => {
  // -- validation for user inputs
  if (!req.body.color || !req.body.dimensions || !req.body.wood || !req.body.handmade || !req.body.status) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }
  // -- if valdiation passes, updating car
  let orderId = req.params.id;

  Order.findByIdAndUpdate(orderId, req.body)
    .then((data) => res.json({ message: 'Order updated!' }))
    .catch((err) => console.log(err));
};

module.exports = putOrder;
