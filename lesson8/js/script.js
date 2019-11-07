const friday = 5;
const today = new Date(); 
const localeDate = new Intl.DateTimeFormat("en-GB", {
   weekday: "long",
   year: "numeric",
   month: "long",
   day: "numeric"
});

if (today.getDay() == friday) {
   toggleBanner() // show only on Friday
} 

document.getElementById('copyYear').innerHTML = today.getFullYear();
document.getElementById('timestamp').innerHTML = localeDate.format(today);

function toggleMenu() {
   document.getElementsByClassName("navigation")[0].classList.toggle("hide");
}

function toggleBanner() {
   document.getElementsByClassName("banner")[0].classList.toggle("hide");
}
