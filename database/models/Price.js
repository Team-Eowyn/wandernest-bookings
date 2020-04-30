var mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/wandernest_bookings'
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}).
  catch(error => handleError(error));
const faker = require('faker');

const priceSchema = new mongoose.Schema({
  weekday: Number,
  weekend: Number
})

var Price = mongoose.model('Price', priceSchema);

var weekday = faker.commerce.price();
var weekend = weekday*1.2

var newPrice = new Price({
  weekday: weekday,
  weekend: weekend
})

newPrice.save((err, newPrice) => {
  if (err) {
    console.error(err);
  } else {
    console.log('new prices added to database');
  }
})
