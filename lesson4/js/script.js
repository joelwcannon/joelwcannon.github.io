var today = new Date(); 
var year = today.getFullYear();

document.getElementById('copyYear').innerHTML = year;

document.getElementById('timestamp').innerHTML = document.lastModified;

function toggleMenu() {
   console.log("it worked!")
   document.getElementsByClassName("navigation")[0].classList.toggle("hide");
}