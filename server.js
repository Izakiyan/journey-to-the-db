var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/journey');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('public'));
app.use(express.static('node_modules'));


app.post('/journey', function (req,res) {
	console.log(req.body);
	res.send("Success");
});

app.listen(8000);