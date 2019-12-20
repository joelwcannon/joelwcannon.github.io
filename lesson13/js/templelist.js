// console.log ("temple list");
const requestURL = './json/templelist.json';
const imagesPath = 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/';

fetch(requestURL)
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
   aEl.setAttribute('href', "#");
   aEl.textContent = town.name;
   listToConfig.appendChild(aEl);
})
      // townsToConfig.forEach((townEl) => {
      //    for (let i = 0; i < towns.length; i++) {
      //       let townName = towns[i].name;
      //       console.log(townEl.dataset.town);
      //       if (townName == townEl.dataset.town) {
      //          console.log(towns[i]);

      //          let townNameEl = document.createElement('h3');
      //          townNameEl.textContent = townName;

      //          let imageEl = document.createElement('img');
      //          // imageEl.setAttribute('src', imagesPath.concat(image.getAttribute('data-src')));
      //          imageEl.setAttribute('src', imagesPath.concat(towns[i].photo));
      //          imageEl.setAttribute('alt', townName);

      //          let mottoEl = document.createElement('h4');
      //          mottoEl.textContent = `"${towns[i].motto}"`;

      //          let yearFoundedEl = document.createElement('p');
      //          yearFoundedEl.textContent = `Founded: ${towns[i].yearFounded}`;

      //          let populationEl = document.createElement('p');
      //          populationEl.textContent = `2019 Population: ${towns[i].currentPopulation}`;
               
      //          let rainFallEl = document.createElement('p');
      //          rainFallEl.textContent = `Average Rain Fall: ${towns[i].averageRainfall}"`;

      //          townEl.appendChild(imageEl);
      //          townEl.appendChild(townNameEl);
      //          townEl.appendChild(mottoEl);
      //          townEl.appendChild(yearFoundedEl);
      //          townEl.appendChild(populationEl);
      //          townEl.appendChild(rainFallEl);
      //       }
      //    }
      //    // observer.observe(img);
      // });

      // for (let i = 0; i < towns.length; i++) {
         // select matching card
         // let card = document.createElement('section');

         // let townName = towns[i].name;
         // let townNameEl = document.createElement('h3');
         // townNameEl.textContent = townName;

         // let imageEl = document.createElement('img');
         // imageEl.setAttribute('src', imagesPath.concat(image.getAttribute('data-src')));
         // imageEl.setAttribute('src', imagesPath.concat(towns[i].photo));
         // imageEl.setAttribute('alt', townName);

         // let mottoEl = document.createElement('p');
         // mottoEl.textContent = towns[i].motto;

         // let yearFoundedEl = document.createElement('p');
         // yearFoundedEl.textContent = towns[i].yearfounded;

         // let populationEl = document.createElement('p');
         // populationEl.textContent = towns[i].currentPopulation;

         // card.appendChild(imageEl);
         // card.appendChild(townNameEl);
         // card.appendChild(mottoEl);
         // card.appendChild(yearFoundedEl);
         // card.appendChild(populationEl);

      // }
   });