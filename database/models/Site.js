var mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/wandernest_bookings'
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}).
  catch(error => handleError(error));
const faker = require('faker');

const siteSchema = new mongoose.Schema({
  name: String,
  url: String
})

var Site = mongoose.model('Site', siteSchema);

var newSite = new Site({
  name: faker.company.companyName(),
  url: faker.internet.url()
})

newSite.save((err, newSite) => {
  if (err) {
    console.error(err);
  } else {
    console.log('new site added to db');
  }
})