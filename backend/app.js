const express = require('express');
const cors = require('cors');
const benchmarks = require('./routes/benchmarks');


const app = express();
const port = 5000;

app.use(cors());
app.use('/benchmarks', benchmarks);

app.get('/', (request, response) => {
    response.send('Node.js application is up and running! :)')
});

app.listen(port, () => {
    console.log(`Node.js app listening at http://localhost:${port}`);
});
