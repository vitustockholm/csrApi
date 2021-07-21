const Order = require('../models/order');

const getOrders = (req, res) => {
  Order.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.exports = getOrders;
