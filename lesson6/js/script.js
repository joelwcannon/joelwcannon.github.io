const friday = 5;
const today = new Date(); 
const localeDate = new Intl.DateTimeFormat("en-GB", {
   weekday: "long",
   year: "numeric",
   month: "long",
   day: "numeric"
});

if (today.getDay() != friday) {hideBanner()}; // show only on Friday

document.getElementById('copyYear').innerHTML = today.getFullYear();
document.getElementById('timestamp').innerHTML = localeDate.format(today);

function toggleMenu() {
   document.getElementsByClassName("navigation")[0].classList.toggle("hide");
}

function hideBanner() {
   document.getElementsByClassName("banner")[0].classList.toggle("hide");
}

doWindChill();

function doWindChill() {
   var tempF = document.getElementById("temperature").value;
   var speed = document.getElementById("windspeed").value;
   if (tempF > 50 && speed < 3) {
      hideWindChill();
   }
   else if (tempF > 50) {
      hideWindChill();
   }

   else if (speed < 3) {
      hideWindChill();
   }

   var chillWind = windChill(tempF, speed);
   document.getElementById('windchill').innerHTML = chillWind + "° F"
}

function windChill(tempF, speed) {
   var speedValue = Math.pow(parseInt(speed), 0.16);
   var windChillR = (35.74 + (0.6215 * parseInt(tempF)) - (35.75 * speedValue) + (0.4275 * parseInt(tempF) * speedValue)).toFixed(2);
   return windChillR;
}

function hideWindChill(); {
   document.getElementsByClassName("windchill")[0].classList.toggle("hide");
}

