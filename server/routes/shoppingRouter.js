const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.delete('/', (req, res) => {
    const sqlText = 'DELETE FROM list;';
    pool.query(sqlText)
        .then( (result) => {
        console.log('Deleted items from database', result);
        res.sendStatus(200);
        })
        .catch( (error) => {
        console.log(`Error making database DELETE query ${sqlText}`, error);
        res.sendStatus(500); 
        })
    })


module.exports = router