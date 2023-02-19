'use strict';

//search = document.querySelector('#search');

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.carboninterface.com/api/v1/auth");
xhr.setRequestHeader("Authorization", "Bearer xS7W8Yyg5tIqwKaQtCnurQ");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
