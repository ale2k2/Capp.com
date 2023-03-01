'use strict';

const url = "https://www.carboninterface.com/api/v1/estimates"
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
.catch(error => console.error(error));
