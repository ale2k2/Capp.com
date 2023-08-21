'use strict';

let total = 0;
const url = "https://www.carboninterface.com/api/v1/estimates";


// Electricity estimate
const form = document.querySelector('form');
const result = document.querySelector('#result');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity = parseFloat(document.querySelector('#electricity').value);

    const data = {"type": "electricity", "electricity_unit": "mwh", "electricity_value": electricity, "country": "us", "state": "fl"};
    fetch(url, {
    method: "POST",
    headers: {
        "Authorization": "Bearer xS7W8Yyg5tIqwKaQtCnurQ",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        let apiData = 0;
        apiData = data.data.attributes.carbon_mt;
        total += apiData;
        result6.innerText = total.toFixed(2);
        result.innerText = apiData.toFixed(2);
        console.log(apiData);
    })
    .catch(error => console.error(error));

    document.querySelector('#electricity').disabled = true;
    document.querySelector('#buttonOne').disabled = true;

});

// Flight estimate
const form2 = document.querySelector('#form2');
const result2 = document.querySelector('#result2');
form2.addEventListener('submit', function(event) {
    event.preventDefault();
    const airTravel2 = parseFloat(document.querySelector('#air-travel2').value);
    const totalEmissions2 = airTravel2 * 0.00076;
    total += totalEmissions2;
    result6.innerText = total.toFixed(2);
    result2.innerText = totalEmissions2.toFixed(2);

    document.querySelector('#air-travel2').disabled = true;
    document.querySelector('#buttonTwo').disabled = true;
});

// Shipping estimate
const form3 = document.querySelector('#form3');
const result3 = document.querySelector('#result3');
form3.addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity3 = parseFloat(document.querySelector('#electricity3').value);
    const naturalGas3 = parseFloat(document.querySelector('#natural-gas3').value);

    const data = {"type": "shipping", "weight_unit": "g", "weight_value": 200, "distance_unit": "mi", "distance_value": 2000, "transport_method": "truck"};
    fetch(url, {
    method: "POST",
    headers: {
        "Authorization": "Bearer xS7W8Yyg5tIqwKaQtCnurQ",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        let apiData = 0;
        apiData = data.data.attributes.carbon_mt;
        total += apiData;
        result6.innerText = total.toFixed(2);
        result3.innerText = apiData.toFixed(2);
        console.log(apiData);
    })
    .catch(error => console.error(error));

    document.querySelector('#electricity3').disabled = true;
    document.querySelector('#natural-gas3').disabled = true;
    document.querySelector('#buttonThree').disabled = true;
});


// Vehicle estimate
const form4 = document.querySelector('#form4');
const result4 = document.querySelector('#result4');
form4.addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity4 = parseFloat(document.querySelector('#electricity4').value);

    const data = {"type": "vehicle", "distance_unit": "mi", "distance_value": electricity4, "vehicle_model_id": "7268a9b7-17e8-4c8d-acca-57059252afe9"};
    fetch(url, {
    method: "POST",
    headers: {
        "Authorization": "Bearer xS7W8Yyg5tIqwKaQtCnurQ",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        let apiData = 0;
        apiData = data.data.attributes.carbon_mt;
        total += apiData;
        result6.innerText = total.toFixed(2);
        result4.innerText = apiData.toFixed(2);
        console.log(apiData);
    })
    .catch(error => console.error(error));

    document.querySelector('#electricity4').disabled = true;
    document.querySelector('#buttonFour').disabled = true;
});

// Fuel estimate
const form5 = document.querySelector('#form5');
const result5 = document.querySelector('#result5');
form5.addEventListener('submit', function(event) {
    event.preventDefault();
    const electricity5 = parseFloat(document.querySelector('#electricity5').value);

    const data = {"type": "fuel_combustion", "fuel_source_type": "ng", "fuel_source_unit": "btu", "fuel_source_value": electricity5};
    fetch(url, {
    method: "POST",
    headers: {
        "Authorization": "Bearer xS7W8Yyg5tIqwKaQtCnurQ",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        let apiData = 0;
        apiData = data.data.attributes.carbon_mt;
        total += apiData;
        result6.innerText = total.toFixed(2);
        result5.innerText = apiData.toFixed(2);
        console.log(apiData);
    })
    .catch(error => console.error(error));

    document.querySelector('#electricity5').disabled = true;
    document.querySelector('#buttonFive').disabled = true;
});
