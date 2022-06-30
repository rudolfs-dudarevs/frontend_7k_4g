const app = document.querySelector('.weatherapp');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Madona,lv&APPID=2d48b1d7080d09ea964e645ccd1ec93f&units=metric')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        app.insertAdjacentHTML('afterbegin', `
        <div class="titlebar">
    <h4 class="city">${data.name}</h4>
</div>
<div class="temperature">
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    <h2>${Math.round(data.main.temp)}°C</h2>
</div>
`)
    });


