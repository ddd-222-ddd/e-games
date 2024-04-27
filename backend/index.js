const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const port = 3000;

const serverHttp = http.createServer(app);

app.use(express.static(__dirname + '/frontend'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
}); 