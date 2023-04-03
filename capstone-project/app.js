'use strict';

/*const url = "https://www.carboninterface.com/api/v1/estimates"
const data = {"type": "vehicle", "distance_unit": "mi", "distance_value": 100, "vehicle_model_id": "7268a9b7-17e8-4c8d-acca-57059252afe9"}
fetch(url, {
  method: "POST",
  headers: {
    "Authorization": "Bearer xS7W8Yyg5tIqwKaQtCnurQ",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));*/

const form = document.querySelector('form');
const result = document.querySelector('#result');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity = parseFloat(document.querySelector('#electricity').value);
    const naturalGas = parseFloat(document.querySelector('#natural-gas').value);
    const vehicleMiles = parseFloat(document.querySelector('#vehicle-miles').value);
    const airTravel = parseFloat(document.querySelector('#air-travel').value);
    const totalEmissions = electricity * 0.0007 + naturalGas * 0.0053 + vehicleMiles * 0.0006 + airTravel * 0.00076;
    result.innerText = totalEmissions.toFixed(2);
});
