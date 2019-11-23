const townId = document.getElementById('town').dataset.townid;
console.log(townId);
// const prestonId = 5604473;
const appId = "ca6c0f399be1148d24ceb57e7ed8ae40";
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?id=${townId}&units=imperial&APPID=${appId}`;
const forecastAPIURL = `https://api.openweathermap.org/data/2.5/forecast?id=${townId}&units=imperial&APPID=${appId}`;
const weatherIconPath = "https://openweathermap.org/img/w/";
const dow = new Intl.DateTimeFormat("en-US", {
   weekday: "short"
});

fetch(weatherAPIURL)
   .then((response) => response.json())
   .then((jsObject) => {
      console.log(jsObject);
      const tempF = jsObject.main.temp.toFixed(0);
      const windSpeedMPH = jsObject.wind.speed.toPrecision(2);
      const windChillF = windChill(tempF, windSpeedMPH);
      document.getElementById('temperature').textContent = tempF;
      document.getElementById('hightemp').textContent = jsObject.main.temp_max.toFixed(0);
      document.getElementById('windspeed').textContent = windSpeedMPH;
      document.getElementById('windchill').textContent = windChillF;
      document.getElementById('humidity').textContent = jsObject.main.humidity.toFixed(0);
      document.getElementById('description').textContent = jsObject.weather[0].description;
   });

fetch(forecastAPIURL)
   .then((response) => response.json())
   .then((jsObject) => {
      const fiveDayForecast = jsObject.list.filter(isEarlyAfternoon);
      fiveDayForecast.forEach(injectForecast)
   });

function injectForecast(forecast) {
   const d = new Date(forecast.dt * 1000);
   const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';

   document.getElementById('five-day-grid').innerHTML +=
      `<div class="daily-forecast">
     <div class="dow">${dow.format(d)}</div>
     <img src="${imagesrc}" class="weather-icon"></img>
     <div class="temp">${forecast.main.temp.toFixed(0)} °F</div>
  </div>`
}

function isEarlyAfternoon(forecast) {
   return forecast.dt_txt.includes("18:00:00");
}

function windChill(tempF, speed) {
   const maxTempF = 50;
   const minWindSpeed = 3;
   let f = "N/A"
   if ((tempF <= maxTempF) && (speed >= minWindSpeed)) {
      f = (35.74 + (0.6215 * tempF) -
         (35.75 * speed ** 0.16) +
         (0.4275 * tempF * speed ** 0.16)).toFixed(0);
   }
   return f;
}