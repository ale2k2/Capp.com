'use strict';

//search = document.querySelector('#search');

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.carboninterface.com/api/v1/estimates");
xhr.setRequestHeader("Authorization", "Bearer xS7W8Yyg5tIqwKaQtCnurQ");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({
    "type": "electricity",
        "electricity_unit": "mwh",
        "electricity_value": 42,
        "country": "us",
        "state": "fl"
}));
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
