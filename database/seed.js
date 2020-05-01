const site = require('./models/Site.js');
const price = require('./models/Price.js');


let x = 0;
while (x < 20) {
  site.add();
  x += 1;
}

let y = 0;
while (y < 50) {
  price.add();
  y += 1;
}
