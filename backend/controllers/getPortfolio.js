const Portfolio = require('../models/portfolio');

const getPortfolio = (req, res) => {
  Portfolio.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.exports = getPortfolio;
