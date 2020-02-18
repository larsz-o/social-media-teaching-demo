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

app.get('/api/keywords', db.getKeywords);
app.get('/api/keywords/:id', db.getKeywordsByID);
app.post('/api/keywords', db.addKeyword);
app.get('/api/news', db.getNews);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });