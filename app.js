const express = require("express");

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => res.send("<h1>Hello world with express!</h1>"));

app.listen(8080, '0.0.0.0',() => {
    console.log(`Example app listening at http://localhost:8080`);
});


/* standard server
    var server = http.createServer((req, res) => {
        res.end("Hello world!");
    });

    server.listen(3000);
    console.log("Server on port 3000");
*/
