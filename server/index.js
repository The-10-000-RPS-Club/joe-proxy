const express = require('express');
const axios = require('axios');
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();
const PORT = 3008;
app.use(express.static(PUBLIC_DIR));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/reviews/:id', (req, res) => {
  axios.get(`http://ec2-54-244-0-175.us-west-2.compute.amazonaws.com:80${req.url}`)
  .then((data) => res.send(data))
  .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});
