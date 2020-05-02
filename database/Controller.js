const Hotel = require('./Model.js');
const db = require('./index.js');

module.exports = {
  getOne: (params, callback) => {
    Hotel.find({ id: params }, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },
  getAll: (callback) => {
    Hotel.find({}, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },
};
