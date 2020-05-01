const mongoose = require('mongoose');
// const faker = require('faker');

const priceSchema = new mongoose.Schema({
  weekday: Number,
  weekend: Number,
});

const Price = mongoose.model('Price', priceSchema);

module.exports = {
  add: () => {
    let weekday = 90 + Math.floor(Math.random() * 600);
    let weekend = (weekday * 1.2).toFixed(2);
    const newPrice = new Price({
      weekday,
      weekend,
    });
    newPrice.save((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('new price added to database!');
      }
    });
  },
  get: () => {
    Price.find();
  },
};
