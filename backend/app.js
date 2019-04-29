const express = require('express');
const cors = require('cors');
const settings = require('./settings.json');

const bracnhes = require('./routes/branches');
const benchmarks = require('./routes/benchmarks');


const app = express();

app.use(cors());
app.use('/benchmarks', benchmarks);
app.use('/branches', bracnhes);

app.get('/', (request, response) => {
    response.send('Node.js application is up and running! :)')
});

app.listen(settings.port, settings.server, () => {
    console.log(`Node.js app listening at http://localhost:${settings.port}`);
});
