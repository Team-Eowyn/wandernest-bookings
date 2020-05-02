const model = require('./Model.js');

module.exports = {
  getOne: (params, callback) => {
    model.Hotel.find({ id: params.id }, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },
  getAll: (callback) => {
    model.Hotel.find({}, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },
};
