var mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/wandernest_bookings'
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}).
  catch(error => handleError(error));

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', () => {
    console.log('dabatabase connected!')
  })


 module.exports = db;

