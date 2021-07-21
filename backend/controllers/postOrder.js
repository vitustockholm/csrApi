const Order = require('../models/order');

const postOrder = (req, res) => {
  console.log(req.body);
  // -- validation for user inputs
  if (
    !req.body.color ||
    !req.body.dimensions ||
    !req.body.material ||
    !req.body.image
  ) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }

  let order1 = req.body;
  order1.status = 'in process';
  order1.handmade = true;
  console.log(order1);

  const order = new Order(order1);

  order
    .save()
    .then((data) => {
      res.redirect('http://127.0.0.1:5500/frontend/index.html');
    })
    .catch((err) => console.log(err));
};

module.exports = postOrder;
