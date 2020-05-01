const mongoose = require('mongoose');
const faker = require('faker');

const url = 'mongodb://localhost:27017/wandernest_bookings';
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => console.error(error));

const siteSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const Site = mongoose.model('Site', siteSchema);

module.exports = {
  add: () => {
    const newSite = new Site({
      name: faker.company.companyName(),
      url: faker.internet.url(),
    });
    newSite.save((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('new site added to database!');
      }
    });
  },
  get: () => {
    Site.find();
  },
};
