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

let idIndex = 1;

while (idIndex < 101) {
  const fall = (130 + Math.random() * 100).toFixed(2);
  const winter = (70 + Math.random() * 100).toFixed(2);
  const spring = (200 + Math.random() * 100).toFixed(2);
  const summer = (300 + Math.random() * 200).toFixed(2);

  const newHotel = new Hotel({
    id: idIndex,
    name: faker.company.companyName(),
    fallPrice: {
      weekday: fall,
      weekend: fall * 1.5,
    },
    winterPrice: {
      weekday: winter,
      weekend: winter * 1.5,
    },
    springPrice: {
      weekday: spring,
      weekend: spring * 1.5,
    },
    summerPrice: {
      weekday: summer,
      weekend: summer * 1.5,
    },
    otherSites: chooseRandomSites(),
  });

  newHotel.save((err) => {
    if (err) {
      console.error(err);
    }
  });

  idIndex += 1;
}
