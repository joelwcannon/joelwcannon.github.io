// console.log("temple list");
const templeListURL = './json/templelist.json';
const templesURL = './json/temples.json';
const imagesPath = 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/';

fetch(templeListURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      // console.table(jsonObject); // temporary checking for valid response and data parsing
      const towns = jsonObject;

      let listToConfig = document.querySelector('aside.sidebar');
      // console.table(listToConfig);
      towns.forEach((town) => {
         let aEl = document.createElement('a');

         if (town.weatherid) {
            aEl.setAttribute('href', `visit.html?id=${town.id}&weatherid=${town.weatherid}`);
         } else {
            aEl.classList.toggle("inactive");
         }
         // aEl.className = "live";
         aEl.textContent = town.name;
         listToConfig.appendChild(aEl);
      })

   });

function matchingTemple(temple) {
   return temple.id == urlp['id'];
   // console.log(urlp['id'], (urlp['id'] == temple.id), temple);
}

fetch(templesURL)
   .then((response) => response.json())
   .then((jsObject) => {
      // console.log("temples ", jsObject);

      const temple = jsObject.find(matchingTemple);
      // console.log("temple found ", temple);
      if (temple) {
         

         document.getElementById('name').textContent = temple.name;
         // document.getElementById('name').setAttribute('data-weatherid',temple.weatherid);
         document.getElementById('phone').innerHTML = `<span>Phone: </span>
      <a href="tel:${temple.phone}">${temple.phone}</a>`;
         document.getElementById('email').innerHTML = `<span>Email: </span>
      <a href="mailto:${temple.email}">${temple.email}</a>`;
         document.getElementById('map').setAttribute('src', temple.mapurl);
         document.getElementById('photo').innerHTML = `<source media="(min-width: 800px)" srcset="${imagesPath}${temple.imageurls[1]}">
      <source media="(min-width: 400px)" srcset="${imagesPath}${temple.imageurls[0]}">
      <img src="./images/houseofthelord.jfif" alt="placeholder">`;

         buildList("services", "Services", temple.services);
         buildList("closures", "2020 Closures", temple.closures);

         function buildList(id, title, arr) {
            const ulEl = document.getElementById(id);

            // console.log(title, arr);
            // console.log(document.getElementById(id).textContent)

            ulEl.innerHTML = title;
            arr.forEach((li) => {
               let liEl = document.createElement('li');
               liEl.textContent = `${li}`;
               ulEl.appendChild(liEl);
            })
         }

         let ulEl = document.getElementById("milestones");

         ulEl.innerHTML = "Milestones";
         temple.milestones.forEach((li) => {
            let liEl = document.createElement('li');
            liEl.innerHTML = `<span class="mdate">${li.date}</span> -- <span class="milestone">${li.milestone}</span>`;
            ulEl.appendChild(liEl);
         })

         ulEl = document.getElementById("schedule");
         ulEl.innerHTML = "Schedule";
         temple.schedule.forEach((li) => {
            let liEl = document.createElement('li');
            liEl.innerHTML = `<span class="time">${li.time}</span> : <span class="session">${li.session}</span>`;
            ulEl.appendChild(liEl);
         })
         
         console.log(temple);
         const cityEl = document.getElementById("city");
         cityEl.classList.remove("hide");
      }
   });