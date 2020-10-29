const express = require('express');
const axios = require('axios');
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();
const PORT = 3008;

app.use('/products/:id', express.static(PUBLIC_DIR));
app.use(express.static(PUBLIC_DIR));

app.get('/reviews/:id', (req, res) => {
  axios.get(`http://54.244.0.175:80${req.url}`)
  .then((data) => res.send(data))
  .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});
