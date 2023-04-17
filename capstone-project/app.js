'use strict'

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

var total = 0;

const form = document.querySelector('form');
const result = document.querySelector('#result');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity = parseFloat(document.querySelector('#electricity').value);
    const naturalGas = parseFloat(document.querySelector('#natural-gas').value);
    const vehicleMiles = parseFloat(document.querySelector('#vehicle-miles').value);
    const airTravel = parseFloat(document.querySelector('#air-travel').value);
    const totalEmissions = electricity * 0.0007 + naturalGas * 0.0053 + vehicleMiles * 0.0006 + airTravel * 0.00076;
    total += totalEmissions;
    result6.innerText = total.toFixed(2);
    result.innerText = totalEmissions.toFixed(2);
    document.querySelector('#electricity').disabled = true;
    document.querySelector('#natural-gas').disabled = true;
    document.querySelector('#vehicle-miles').disabled = true;
    document.querySelector('#air-travel').disabled = true;
    document.querySelector('#buttonOne').disabled = true;
});

const form2 = document.querySelector('#form2');
const result2 = document.querySelector('#result2');
form2.addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity2 = parseFloat(document.querySelector('#electricity2').value);
    const naturalGas2 = parseFloat(document.querySelector('#natural-gas2').value);
    const vehicleMiles2 = parseFloat(document.querySelector('#vehicle-miles2').value);
    const airTravel2 = parseFloat(document.querySelector('#air-travel2').value);
    const totalEmissions2 = electricity2 * 0.0007 + naturalGas2 * 0.0053 + vehicleMiles2 * 0.0006 + airTravel2 * 0.00076;
    total += totalEmissions2;
    result6.innerText = total.toFixed(2);
    result2.innerText = totalEmissions2.toFixed(2);
    document.querySelector('#electricity2').disabled = true;
    document.querySelector('#natural-gas2').disabled = true;
    document.querySelector('#vehicle-miles2').disabled = true;
    document.querySelector('#air-travel2').disabled = true;
    document.querySelector('#buttonTwo').disabled = true;
});

const form3 = document.querySelector('#form3');
const result3 = document.querySelector('#result3');
form3.addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity3 = parseFloat(document.querySelector('#electricity3').value);
    const naturalGas3 = parseFloat(document.querySelector('#natural-gas3').value);
    const vehicleMiles3 = parseFloat(document.querySelector('#vehicle-miles3').value);
    const airTravel3 = parseFloat(document.querySelector('#air-travel3').value);
    const totalEmissions3 = electricity3 * 0.0007 + naturalGas3 * 0.0053 + vehicleMiles3 * 0.0006 + airTravel3 * 0.00076;
    total += totalEmissions3;
    result6.innerText = total.toFixed(2);
    result3.innerText = totalEmissions3.toFixed(2);
    document.querySelector('#electricity3').disabled = true;
    document.querySelector('#natural-gas3').disabled = true;
    document.querySelector('#vehicle-miles3').disabled = true;
    document.querySelector('#air-travel3').disabled = true;
    document.querySelector('#buttonThree').disabled = true;
});

const form4 = document.querySelector('#form4');
const result4 = document.querySelector('#result4');
form4.addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity4 = parseFloat(document.querySelector('#electricity4').value);
    const naturalGas4 = parseFloat(document.querySelector('#natural-gas4').value);
    const vehicleMiles4 = parseFloat(document.querySelector('#vehicle-miles4').value);
    const airTravel4 = parseFloat(document.querySelector('#air-travel4').value);
    const totalEmissions4 = electricity4 * 0.0007 + naturalGas4 * 0.0053 + vehicleMiles4 * 0.0006 + airTravel4 * 0.00076;
    total += totalEmissions4;
    result6.innerText = total.toFixed(2);
    result4.innerText = totalEmissions4.toFixed(2);
    document.querySelector('#electricity4').disabled = true;
    document.querySelector('#natural-gas4').disabled = true;
    document.querySelector('#vehicle-miles4').disabled = true;
    document.querySelector('#air-travel4').disabled = true;
    document.querySelector('#buttonFour').disabled = true;
});

const form5 = document.querySelector('#form5');
const result5 = document.querySelector('#result5');
form5.addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity5 = parseFloat(document.querySelector('#electricity5').value);
    const naturalGas5 = parseFloat(document.querySelector('#natural-gas5').value);
    const vehicleMiles5 = parseFloat(document.querySelector('#vehicle-miles5').value);
    const airTravel5 = parseFloat(document.querySelector('#air-travel5').value);
    const totalEmissions5 = electricity5 * 0.0007 + naturalGas5 * 0.0053 + vehicleMiles5 * 0.0006 + airTravel5 * 0.00076;
    total += totalEmissions5;
    result6.innerText = total.toFixed(2);
    result5.innerText = totalEmissions5.toFixed(2);
    document.querySelector('#electricity5').disabled = true;
    document.querySelector('#natural-gas5').disabled = true;
    document.querySelector('#vehicle-miles5').disabled = true;
    document.querySelector('#air-travel5').disabled = true;
    document.querySelector('#buttonFive').disabled = true;
});
