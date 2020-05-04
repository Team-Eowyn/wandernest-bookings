const faker = require('faker');
const Hotel = require('./Model.js');
const db = require('./index.js');

const sites = [];
let x = 0;
while (x < 20) {
  sites.push(faker.internet.domainName());
  x += 1;
}
const chooseRandomSites = () => {
  const newSites = [];
  const numberOfSites = Math.ceil(Math.random() * 6);
  let y = 0;
  let index = Math.floor(Math.random() * 15);
  while (y < numberOfSites) {
    newSites.push(sites[index]);
    index += 1;
    y += 1;
  }
  return newSites;
};

const chooseAvailability = () => {
  const availability = ['Book now! This hotel is likely to sell out soon.', '2 people have started booking this hotel', 'Lowest prices for your stay'];
  var index = Math.floor(Math.random() * 3)
  return availability[index];
};

let idIndex = 1;

while (idIndex < 101) {
  const fall = (130 + Math.random() * 100);
  const winter = (70 + Math.random() * 100);
  const spring = (200 + Math.random() * 100);
  const summer = (300 + Math.random() * 200);

  const newHotel = new Hotel({
    id: idIndex,
    name: faker.company.companyName(),
    fallPrice: {
      weekday: Number.parseFloat(fall).toFixed(2),
      weekend: Number.parseFloat(fall * 1.5).toFixed(2),
    },
    winterPrice: {
      weekday: Number.parseFloat(winter).toFixed(2),
      weekend: Number.parseFloat(winter * 1.5).toFixed(2),
    },
    springPrice: {
      weekday: Number.parseFloat(spring).toFixed(2),
      weekend: Number.parseFloat(spring * 1.5).toFixed(2),
    },
    summerPrice: {
      weekday: Number.parseFloat(summer).toFixed(2),
      weekend: Number.parseFloat(summer * 1.5).toFixed(2),
    },
    otherSites: chooseRandomSites(),
    availability: chooseAvailability(),
  });

  newHotel.save((err) => {
    if (err) {
      console.error(err);
    }
  });

  idIndex += 1;
}
