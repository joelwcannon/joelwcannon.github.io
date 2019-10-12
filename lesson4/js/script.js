const today = new Date(); 
const localeDate = new Intl.DateTimeFormat("en-US", {
   weekday: "long",
   year: "numeric",
   month: "long",
   day: "numeric"
});

document.getElementById('copyYear').innerHTML = today.getFullYear();
document.getElementById('timestamp').innerHTML = localeDate.format(today);

function toggleMenu() {
   console.log("it worked!")
   document.getElementsByClassName("navigation")[0].classList.toggle("hide");
}
