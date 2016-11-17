var express  = require('express');
var app      = express(); 
var mongoose = require('mongoose');
var port  	 = process.env.PORT || 8000; 
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override'); 
mongoose.connect('mongodb://localhost/restaurants'); 

app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

require('./app/routes.js')(app);

app.listen(port);
console.log("listening on port " + port);
