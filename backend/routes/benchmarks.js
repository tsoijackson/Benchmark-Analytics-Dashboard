const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const settings = require('./../settings.json');
const router = express.Router();

router.get('/', (request, response, next) => {
    const connection = mysql.createConnection(settings.database);
    let query;

    // get benchmarks from start to end date ranges for a certain branch
    if (request.query.start && request.query.end && request.query.branch) {
        query = `SELECT benchmark.id as id, branch.name as branch, os.name as os, create_time, commit_hash, cpu, mem, note
        FROM benchmark, branch, os
        WHERE benchmark.branch_id = branch.id and benchmark.os_id = os.id AND branch.name = "${request.query.branch}"
        AND create_time BETWEEN '${request.query.start}' AND '${request.query.end}'
        ORDER BY create_time ASC`;
    }

    // get benchmarks from start to end date ranges
    else if (request.query.start && request.query.end) {
        query = `SELECT benchmark.id as id, branch.name as branch, os.name as os, create_time, commit_hash, cpu, mem, note
        FROM benchmark, branch, os
        WHERE benchmark.branch_id = branch.id and benchmark.os_id = os.id
        AND create_time BETWEEN '${request.query.start}' AND '${request.query.end}'`;
    }

    // get benchmarks from start to present
    else if (request.query.start) {
        query = `SELECT benchmark.id as id, branch.name as branch, os.name as os, create_time, commit_hash, cpu, mem, note
        FROM benchmark, branch, os
        WHERE benchmark.branch_id = branch.id and benchmark.os_id = os.id
        AND create_time BETWEEN '${request.query.start}' AND CURRENT_DATE()`;
    }
    // get all benchmarks
    else {
        query = `SELECT benchmark.id as id, branch.name as branch, os.name as os, create_time, commit_hash, cpu, mem, note
        FROM benchmark, branch, os
        WHERE benchmark.branch_id = branch.id and benchmark.os_id = os.id`;
    }

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

router.post('/', (request, response, next) => {
    const connection = mysql.createConnection(settings.database);

    if (request.body.note) {
        request.body.note = '"' + request.body.note + '"'
    }
    if (request.body.commit_hash) {
        request.body.commit_hash = '"' + request.body.commit_hash + '"'
    }

    let query = `INSERT INTO benchmark (branch_id, os_id, create_time, commit_hash, cpu, mem, note) 
    VALUES (${request.body.branch_id}, ${request.body.os_id}, CURRENT_TIME(), ${request.body.commit_hash}, ${request.body.cpu}, ${request.body.mem}, ${request.body.note});`;

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