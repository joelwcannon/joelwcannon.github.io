const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const localeDate = new Intl.DateTimeFormat("en-US", {
   year: "numeric",
   month: "short",
   day: "numeric"
});

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      // console.table(jsonObject); // temporary checking for valid response and data parsing

      const prophets = jsonObject['prophets'];
      for (let i = 0; i < prophets.length; i++) {
         let card = document.createElement('section');

         let fullName = prophets[i].name + ' ' + prophets[i].lastname;
         let nameEl = document.createElement('h2');
         nameEl.textContent = fullName;
         card.appendChild(nameEl);

         let birthEl = document.createElement('p');
         let birthDate = new Date(prophets[i].birthdate);
         birthEl.textContent = `Born: ${localeDate.format(birthDate)} in ${prophets[i].birthplace}`;
         card.appendChild(birthEl);

         let deathEl = document.createElement('p');
         let deathDate = new Date(prophets[i].death);
         deathEl.textContent = `Died: ${localeDate.format(deathDate)}`;
         card.appendChild(deathEl);

         let imageEl = document.createElement('img');        
         imageEl.setAttribute('src', prophets[i].imageurl);
         imageEl.setAttribute('alt', fullName + ' - ' + prophets[i].order);
         card.appendChild(imageEl);

         document.querySelector('div.cards').appendChild(card);

      }
   });