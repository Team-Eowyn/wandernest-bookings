const mongoose = require('mongoose');
const faker = require('faker');

const sites = [];
let x = 0;
while (x < 20) {
  sites.push(faker.internet.domainName());
  x += 1;
}
const chooseRandomSites = () => {
  let newSites = [];
  let numberOfSites = Math.ceil(Math.random() * 6);
  let y = 0;
  let index = Math.floor(Math.random() * 15);
  while (y < numberOfSites) {
    newSites.push(sites[index]);
    index += 1;
    y += 1;
  }
  return newSites;
};

const hotelSchema = new mongoose.Schema({
  id: Number,
  name: String,
  fallPrice: {
    weekday: Number,
    weekend: Number,
  },
  winterPrice: {
    weekday: Number,
    weekend: Number,
  },
  springPrice: {
    weekday: Number,
    weekend: Number,
  },
  summerPrice: {
    weekday: Number,
    weekend: Number,
  },
  otherSites: Array,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = {
  add: (index) => {
    const fall = (130 + Math.random() * 100).toFixed(2)
    const winter = (70 + Math.random() * 100).toFixed(2);
    const spring = (200 + Math.random() * 100).toFixed(2);
    const summer = (300 + Math.random() * 100).toFixed(2);

    const newHotel = new Hotel({
      id: index,
      name: faker.company.companyName(),
      fallPrice: {
        weekday: fall,
        weekend: fall * 2,
      },
      winterPrice: {
        weekday: winter,
        weekend: winter * 2,
      },
      springPrice: {
        weekday: spring,
        weekend: spring * 2,
      },
      summerPrice: {
        weekday: summer,
        weekend: summer * 2,
      },
      otherSites: chooseRandomSites(),
    });

    newHotel.save((err) => {
      if (err) {
        console.error(err);
      }
    });
  },
  get: (idNum) => {
    Hotel.find({ id: idNum });
  },
};
