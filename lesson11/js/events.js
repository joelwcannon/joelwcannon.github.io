const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      const towns = jsonObject['towns'];

      const eventListEl = document.querySelector('div.event-list[data-town]');
      // console.table(townsToConfig);

      // townsToConfig.forEach((townEl) => {
      for (let i = 0; i < towns.length; i++) {
         let townName = towns[i].name;
         console.log(eventListEl.dataset.town);
         if (townName == eventListEl.dataset.town) {
            console.log(towns[i]);

            towns[i].events.forEach((event) => {
               let eventEl = document.createElement('p');
               eventEl.textContent = `"${event}"`;
               eventListEl.appendChild(eventEl);
            })
         }
      }
   });