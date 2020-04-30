var mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/wandernest_bookings'
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}).
  catch(error => handleError(error));

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', () => {
    console.log('dabatabase connected!')
  })

  const siteSchema = new mongoose.Schema({
    name: String,
    url: String
  })

  var DealSite = mongoose.model('DealSite', siteSchema);

  const priceSchema = new mongoose.Schema({
    weekday: Number,
    weekend: Number
  })

  var Price = mongoose.model('Price', priceSchema);

