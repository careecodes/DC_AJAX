const citySpan = document.querySelector("#city");
const tempSpan = document.querySelector("#temp");

fetch(
     "http://api.openweathermap.org/data/2.5/weather?q=wylie&appid=9deb864f7791561844d409a3e4e3be56&units=imperial"
).then(response => response.json())
.then(body => {
     console.log(body);
     citySpan.innerText = body.name;
     tempSpan.innerText = body.main.temp;
});