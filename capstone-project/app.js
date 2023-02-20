'use strict';

//search = document.querySelector('#search');

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.carboninterface.com/api/v1/estimates");
xhr.setRequestHeader("Authorization", "Bearer xS7W8Yyg5tIqwKaQtCnurQ");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({
  "type": "vehicle",
  "distance_unit": "mi",
  "distance_value": 100,
  "vehicle_model_id": "7268a9b7-17e8-4c8d-acca-57059252afe9"
}));
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
