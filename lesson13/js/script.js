function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var urlp = [];
let s = location.toString().split('?');
if (s[1]) {
  s = s[1].split('&');
  for (let i = 0; i < s.length; i++) {
    let u = s[i].split('=');
    urlp[u[0]] = u[1];
  }
}
if (urlp['id']) { 
  document.getElementById('name').setAttribute('data-id',urlp['id']);
}
if (urlp['weatherid']) { 
  document.getElementById('name').setAttribute('data-weatherid',urlp['weatherid']);
}
// console.log("parse URL: ", urlp);
// console.log("id: ", urlp['id'])
//  alert(urlp['city']); 