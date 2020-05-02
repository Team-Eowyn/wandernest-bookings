const mongoose = require('mongoose');

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
module.exports = Hotel;
