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

router.post('/', (req, res) => {
    const shoppingItem = req.body
    const sqlText = `INSERT INTO list (name, quantity, unit, purchased) 
            VALUES ($1, $2, $3, $4)`
    
    pool.query(sqlText, [
        shoppingItem.name, 
        shoppingItem.quantity, 
        shoppingItem.unit, 
        shoppingItem.purchased
    ]).then(result => {
        console.log(`Added new shoppingItem to the DB`, shoppingItem);
        res.sendStatus(201);
    }).catch(error => {
        console.log(`Error making DB query ${sqlText}`, error);
    })


})
router.delete('/', (req, res) => {
    const sqlText = `DELETE FROM list;`;
    pool.query(sqlText)
        .then( (result) => {
        console.log('DELETEd items from database', result);
        res.sendStatus(200);
        })
        .catch( (error) => {
        console.log(`Error making database DELETE query ${sqlText}`, error);
        res.sendStatus(500); 
        })
    })




module.exports = router