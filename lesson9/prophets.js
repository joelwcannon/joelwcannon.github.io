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

         let imageEl = document.createElement('img');
         imageEl.setAttribute('src', prophets[i].imageurl);
         imageEl.setAttribute('alt', fullName + ' - ' + prophets[i].order);
         card.appendChild(imageEl);
         
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

         

         document.querySelector('div.cards').appendChild(card);

         //  Alternate
         // let card2 = document.createElement('section');
         // let nameEl2 = document.createElement('h2');
         // nameEl2.textContent = fullName;
         // card2.appendChild(nameEl2);

         // let birthEl2 = document.createElement('p');
         // birthEl2.textContent = `Born: ${localeDate.format(birthDate)} in ${prophets[i].birthplace}`;
         // card2.appendChild(birthEl2);

         // let deathEl2 = document.createElement('p');
         // deathEl2.textContent = `Died: ${localeDate.format(deathDate)}`;
         // card2.appendChild(deathEl2);

         // let imageEl2 = document.createElement('img');
         // imageEl2.setAttribute('src', prophets[i].imageurl);
         // imageEl2.setAttribute('alt', fullName + ' - ' + prophets[i].order);

         // let pictureEl2 = document.createElement('picture');
         // pictureEl2.appendChild(imageEl2);
         // card2.appendChild(pictureEl2);
         // document.querySelector('div.cards2').appendChild(card2);
         // console.log(fullName);
      }
   });