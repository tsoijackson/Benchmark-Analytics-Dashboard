const express = require('express');
const rateLimit = require("express-rate-limit");
const cors = require('cors');
const settings = require('./settings.json');

const bracnhes = require('./routes/branches');
const benchmarks = require('./routes/benchmarks');

const app = express();
const rateLimiter = rateLimit({
    windowMS: settings.rateLimit.windowMS, // 1000 ms * 60 sec
    max: settings.rateLimit.max,
    message: `Exceeded rate limit of ${settings.rateLimit.max} calls per ${settings.rateLimit.windowMS / 1000} seconds. Please wait for the next interval.`
});

// libraries app is using
app.use(rateLimiter);
app.use(express.json());
app.use(cors());


// routes
app.use('/benchmarks', benchmarks);
app.use('/branches', bracnhes);


// default route
app.get('/', (request, response) => {
    response.send('Node.js application is up and running! :)')
});

// launch app and listen on certain server:port
app.listen(settings.port, settings.server, () => {
    console.log(`Node.js app listening at http://localhost:${settings.port}`);
});
