const path = require("path");
const express = require('express')
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const homeRoutes = require('./routes/home');
const formPostRoutes = require('./routes/formPost');
const formRouter = require('./routes/form');

app.use(homeRoutes);
app.use(formPostRoutes);
app.use(formRouter);


app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})