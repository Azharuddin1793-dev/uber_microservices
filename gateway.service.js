const express = require("express");
// const morgan = require("morgan");
const proxy = require('express-http-proxy');
const app  = express();


app.use('/stress-test', proxy('http://localhost:3002'));
app.use('/', proxy('http://localhost:3005'));


app.listen(3006, () => {
    console.log("gateway service running on : 3006");
})