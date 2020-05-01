const site = require('./models/Site.js');
const price = require('./models/Price.js');
const hotel = require('./models/Hotel.js');


let x = 0;
let newId = 1;
while (x < 100) {
  hotel.add(newId);
  newId += 1;
  x += 1;
}
