const portfolioOutput = document.querySelector('.admin-output');
const counter = document.querySelector('.counter');
const counterMoney = document.querySelector('.counterMoney');

const ENDPOINT = 'http://localhost:5000/';

const getAllPortfolio = () => {
  return fetch(ENDPOINT + 'api/orders')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      portfolioOutput.innerHTML = data.reduce((total, currentItem) => {
        total += `
         <div>
          <ul>
         <i class="fas fa-truck-loading"></i>
          <li>COLOR: ${currentItem.color}</li>
          <li>DIMENSIONS: ${currentItem.dimensions}</li>
          <li>MATERIAL: ${currentItem.material}</li>  
          <li>STATUS: ${currentItem.status}</li>         
          <li>Price: ${currentItem.price}</li>
          <button id="done">Done</button>
                    
         </ul>
         </div>
         `;
        counter.innerHTML = data.length;
        counterMoney.innerText = currentItem.price + currentItem.price;

        return total;
      }, '');
    });
};

document.addEventListener('DOMContentLoaded', getAllPortfolio);

/////////////////////////////////////////////////////////////
const portfolioOutput2 = document.querySelector('.admin-update');

const getMadeOrdersList = () => {
  return fetch(ENDPOINT + 'api/orders')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      portfolioOutput2.innerHTML = data.reduce((total, currentItem) => {
        // alert(currentItem._id);
        if (currentItem.status == 'done') {
          // alert(currentItem.status);

          total += `
         <div>
          <ul>
          <i class="fas fa-check-circle"></i>
          <h4>${currentItem._id}</h4>
          <li>COLOR: ${currentItem.color}</li>
          <li>DIMENSIONS: ${currentItem.dimensions}</li>
          <li>MATERIAL: ${currentItem.material}</li>
          <li>Price: ${currentItem.price}</li>
          <button id="failed">Failed</button>

         </ul>
         </div>
         `;
        }

        return total;
      }, '');
    });
};

document.addEventListener('DOMContentLoaded', getMadeOrdersList);
