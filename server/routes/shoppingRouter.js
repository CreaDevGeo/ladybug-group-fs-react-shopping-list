const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM list ORDER BY name DESC;`
    pool.query(sqlText)
    .then((result) => {
        console.log('GETting stuff from database', result)
        res.send(result.rows)
    })
    .catch((error) => {
        console.log(`Error in DB query ${sqlText}`, error)
        res.sendStatus(500)
    })
})



module.exports = router