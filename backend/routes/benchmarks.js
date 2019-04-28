const express  = require('express');
const mysql = require('mysql');
const settings = require('./../settings.json');
const router   = express.Router();

router.get('/', (request, response, next) => {
    const connection = mysql.createConnection(settings.database);

    let query = `SELECT benchmark.id as id, branch.name as branch, os.name as os, create_time, commit_hash, cpu, mem, note
                 FROM benchmark, branch, os
                 WHERE benchmark.branch_id = branch.id and benchmark.os_id = os.id`;

    connection.query(query, (error, rows, fields) => {
        if (error) {
          return console.error(error.message);
        }
        else {
            response.send(rows);
        }
    });

    connection.end();
});

module.exports = router;