const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Portfolio = require('./models/portfolio');
const app = express();
const colors = require('colors');

const PORT = process.env.PORT;

// Connecting to DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    // Starting server
    app.listen(PORT, () =>
      console.log(`Server is runing on port ${PORT}...`.bold.yellow.underline)
    );
    console.log(`Connected to MONGODB`.blue.bold.underline);
  })
  .catch((err) => console.log(err));

// Middlewares
app.use(
  cors({
    origin: 'http://127.0.0.1:5500',
  })
);
app.use(express.json());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const getOrders = require('./controllers/getOrders');
const getPortfolio = require('./controllers/getPortfolio');
const postOrder = require('./controllers/postOrder');
const putOrder = require('./controllers/putOrder');

app.get('/api/portfolio', getPortfolio);
// ---- get single car from DB
app.get('/api/orders', getOrders);

// POST method
app.post('/api/order', postOrder);

// PUT method
app.put('/api/order/:id', putOrder);

const portfolioList = [
  {
    color: 'brown',
    dimensions: '2.5x2.5',
    material: 'wood',
    handmade: true,
    image:
      'https://evc108.pcloud.com/dpZ4sOz3XZPKxcp5Z3kLVZZYzg1v7ZNVZZju0ZXZ8NEV1m0xMMJKEqBxxITgxptzrBQV/th-5205729911-648x648.jpg',
    price: 200,
  },
  {
    color: 'Silver',
    dimensions: '1.5x1.5',
    material: 'wood',
    handmade: true,
    image:
      'https://evc196.pcloud.com/dpZ32Oz3XZOKxcp5Z3kLVZZIHg1v7ZNVZZju0ZXZbBDOtkqbJyp9j5sqHeF1gfwxSJFk/th-5205729922-500x500.jpg',
    price: 200,
  },
  {
    color: 'Rustic',
    dimensions: '1.5x1.5',
    material: 'wood',
    handmade: true,
    image:
      'https://evc98.pcloud.com/dpZ7DOz3XZnlxcp5Z3kLVZZlzg1v7ZNVZZju0ZXZWjXUfG6yJpXRXqEKwrcF1RVeWHg7/th-5205729967-581x581.jpg',
    price: 300,
  },
  {
    color: 'Dark browwn',
    dimensions: '1.5x1.5',
    material: 'wood',
    handmade: true,
    image:
      'https://evc120.pcloud.com/dpZHsOz3XZEdxcp5Z3kLVZZizg1v7ZNVZZju0ZXZHjv2FCrfugVDlG96l0X9yFl6BvuX/th-5205730043-864x864.jpg',
    price: 400,
  },
];

app.get('/api/add', (req, res) => {
  portfolioList.forEach((portfolio) => {
    const portfolioObj = new Portfolio(portfolio);
    portfolioObj.save();
  });
  res.send('ok');
});
