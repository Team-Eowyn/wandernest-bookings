const request = require('supertest');
const express = require('express');
const Hotel = require('../database/Model.js');
const controller = require('../database/Controller.js');

const app = express();

app.get('/api/bookings/:id', (req, res) => {
  const { params } = req;

  controller.getOne(params.id, (err, results) => {
    if (err) {
      console.error(err);
      res.status(400).send('something went wrong');
    } else {
      res.status(200).send(results);
    }
  });
});

request(app)
  .get('/api/bookings/100')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err, res) => {
    if (err) {
      throw err;
    }
  });
