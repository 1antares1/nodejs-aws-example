const express = require("express");

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => res.send("Hello world with express!"));

app.listen(4200);
console.log("Server on port 4200");

/* standard server
    var server = http.createServer((req, res) => {
        res.end("Hello world!");
    });

    server.listen(3000);
    console.log("Server on port 3000");
*/
