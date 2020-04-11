const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Felipe Trova');
});

app.listen(3001);
