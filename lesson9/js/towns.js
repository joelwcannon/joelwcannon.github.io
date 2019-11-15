const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const imagesPath = '../lesson9/images/';

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      // console.table(jsonObject); // temporary checking for valid response and data parsing
      const towns = jsonObject['towns'];

      let townsToConfig = document.querySelectorAll('div.card[data-town]');
      // console.table(townsToConfig);

      townsToConfig.forEach((townEl) => {
         for (let i = 0; i < towns.length; i++) {
            let townName = towns[i].name;
            console.log(townEl.dataset.town);
            if (townName == townEl.dataset.town) {
               let townNameEl = document.createElement('h3');
               townNameEl.textContent = townName;

               let imageEl = document.createElement('img');
               // imageEl.setAttribute('src', imagesPath.concat(image.getAttribute('data-src')));
               imageEl.setAttribute('src', imagesPath.concat(towns[i].photo));
               imageEl.setAttribute('alt', townName);

               let mottoEl = document.createElement('h4');
               mottoEl.textContent = `"${towns[i].motto}"`;

               let yearFoundedEl = document.createElement('p');
               yearFoundedEl.textContent = `Founded: ${towns[i].yearFounded}`;

               let populationEl = document.createElement('p');
               populationEl.textContent = `2019 Population: ${towns[i].currentPopulation}`;

               townEl.appendChild(imageEl);
               townEl.appendChild(townNameEl);
               townEl.appendChild(mottoEl);
               townEl.appendChild(yearFoundedEl);
               townEl.appendChild(populationEl);
            }
         }
         // observer.observe(img);
      });

      for (let i = 0; i < towns.length; i++) {
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

      }
   });