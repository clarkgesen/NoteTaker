const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3000;

let reqPath = path.join(__dirname, '../../');//It goes three folders or directories back from given __dirname.

app.get('/', function (req, res) {
  res.sendFile(path.join(reqPath + '/index.html'));
});

app.get('/api/notes', function (req, res) {
  res.send("Sent");
})

app.get('/notes', function (req, res) {
  res.sendFile(path.join(reqPath + '/notes.html'));
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
