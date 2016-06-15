var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}\\index.html`);
});

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}\\about.html`);
});

app.get('/other', (req, res) => {
  res.sendFile(`${__dirname}\\other.html`);
});

app.listen(3002);
