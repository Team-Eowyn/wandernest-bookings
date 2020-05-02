const express = require('express');
const Hotel = require('../database/Model.js');
const controller = require('../database/Controller.js');

const app = express();
const port = 3002;

app.get('/api/bookings/:id', (req, res) => {
  const { params } = req;

  controller.getOne(params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/api/bookings', (req, res) => {
  controller.getAll((err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
