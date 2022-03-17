const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello world with express!"));

app.listen(3000);
console.log("Server on port 3000");

/* standard server
    var server = http.createServer((req, res) => {
        res.end("Hello world!");
    });

    server.listen(3000);
    console.log("Server on port 3000");
*/
