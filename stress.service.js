const express = require("express");
const morgan = require("morgan");
const app  = express();
app.use(morgan('dev'));

app.get('/stress-test', (req, res) => {
    for (let index = 0; index < 100000000000; index++) {
        // const element = array[index];
        
    }
    res.send("Welcome to azhar world");
});

app.listen(3002, () => {
console.log("stress service running on : 3002");
})
