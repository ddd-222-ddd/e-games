const path = require("path");
const express = require('express')
const bodyParser = require("body-parser");

const app = express()


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
    //res.sendFile(path.join(__dirname, './public', 'form.html'))
});
app.listen(8080, () => {
	console.log('Example app listening on port 8080!')
})