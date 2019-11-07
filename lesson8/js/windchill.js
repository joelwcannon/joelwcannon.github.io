/* 
inputs - elements with IDs for temperature and windspeed.
outputs - an element with an ID for windchill.
*/

updateWindChill();

function updateWindChill(){
   let temperatureF = parseFloat(document.getElementById('temperature').textContent);
   let windSpeedMPH = parseFloat(document.getElementById('windspeed').textContent);
   let windChillF = windChill(temperatureF, windSpeedMPH);
   document.getElementById('windchill').textContent = windChillF;
   // if (windChillF== null) {hideWindChill()}
}

function windChill(tempF, speed) { 
   const maxTempF = 50; 
   const minWindSpeed = 3;
   // let f = null;
   let f = "N/A"
   if ((tempF <= maxTempF) && (speed >=minWindSpeed)) {
       f = (35.74 + (0.6215 * tempF) - 
           (35.75 * speed ** 0.16) +
           (0.4275 * tempF * speed ** 0.16)).toFixed(0);
   }
   return f;  
}

// function hideWindChill() {
//    document.getElementsByClassName("windchill")[0].classList.toggle("hide");
// }