const express = require('express');
const mysql = require('mysql');
const settings = require('./../settings.json');
const router = express.Router();

router.get('/', (request, response, next) => {
    const connection = mysql.createConnection(settings.database);

    let query = `SELECT name
                 FROM branch`;

    connection.query(query, (error, rows, fields) => {
        if (error) {
            return console.error(error.message);
        }
        else {
            let result = new Array();

            rows.forEach(element => {
                result.push(element['name'])
            });
            
            response.send(result);
        }
    });

    connection.end();
});

module.exports = router;