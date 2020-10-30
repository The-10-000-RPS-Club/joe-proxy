const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();
const PORT = 3008;

app.use('/products/:id', express.static(PUBLIC_DIR));
app.use(express.static(PUBLIC_DIR));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/reviews/:id/:count/:sort', (req, res) => {
  console.log(req.url);
  axios.get(`http://54.244.0.175${req.url}`)
  .then((data) => res.send(data))
  .catch((err) => res.send(err));
});

app.get('/api/reviews/avg/:id', (req, res) => {
  axios.get(`http://54.244.0.175${req.url}`)
  .then((data) => res.send(data))
  .catch((err) => res.send(err));
});

app.get('/api/relatedItems/:product_id', (req, res) => {
  axios.get(`http://34.208.186.96${req.url}`)
  .then((data) => res.send(data))
  .catch((err) => res.send(err));
});

app.get('/api/products/:id', (req, res) => {
  axios.get(`http://52.10.142.6${req.url}`)
  .then((data) => res.send(data))
  .catch((err) => res.send(err));
});

app.get('/api/questions/:id', (req, res) => {
  axios.get(`http://3.138.228.145${req.url}`)
  .then((data) => res.send(data))
  .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});
