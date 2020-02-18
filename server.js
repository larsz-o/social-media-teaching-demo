const express = require('express');
const bodyParser = require('body-parser');
const app = express();
port = process.env.PORT || 5000;
const db = require('./api/routes/queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/keywords', db.getKeywords);
app.get('/keywords/:id', db.getKeywordsByID);
app.post('/keywords', db.addKeyword);
app.get('/news', db.getNews);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });