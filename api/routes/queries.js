const pool = require('../modules/pool'); 

const getKeywords = (req, res) => {
    const query = `SELECT * FROM keywords;`;
    pool.query(query).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting keywords', error);
        res.sendStatus(500);
    })
};
const getKeywordsByID = (req, res) => {
    const id = parseInt(request.params.id);
    const query = `SELECT * FROM keywords WHERE id = $1;`;
    pool.query(query, [id]).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting keywords', error);
        res.sendStatus(500);
    })
};
const addKeyword = (req, res) => {
    const keyword = req.body;
    const query = `INSERT INTO keywords (name, group) VALUES ($1, $2);`;
    pool.query(query, [keyword.name, keyword.group]).then((results) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error adding keywords', error);
        res.sendStatus(500);
    })
}
const getNews = (req, res) => {
  const query = `SELECT * FROM news ORDER BY date_created;`;
  pool.query(query).then((results) => {
    res.send(results.rows);
  }).catch((error) => {
    console.log('Error getting stories', error);
  })
}

module.exports = {
    getKeywordsByID,
    addKeyword,
    getKeywords,
    getNews
}; 