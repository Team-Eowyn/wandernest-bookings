const mongoose = require('mongoose');

const url = 'mongodb://localhost/wandernest_bookings';
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => console.error(error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('dabatabase connected!');
});
