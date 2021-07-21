const portfolioOutput = document.querySelector('.portfolio-output');
const ENDPOINT = 'http://localhost:5000/';

const getAllPortfolio = () => {
  return fetch(ENDPOINT + 'api/portfolio')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      portfolioOutput.innerHTML = data.reduce((total, currentItem) => {
        total += `
         
          <img src="${currentItem.image}">
        
         `;

        return total;
      }, '');
    });
};

getAllPortfolio();
