//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 
// ==============================================================================


var app = express();   					// Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8000;	// Sets an initial port. We'll use this later in our listener



// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//====================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================




	// app.get('/', function(req, res){
	// res.sendFile(path.join(__dirname, 'home.html'));
	// })

	var homeLink = require('./app/routing/html-routes.js')(app);
	var surveyLink = require('./app/routing/api-routes.js')(app);

// module.exports = function(app) {

	

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + homeLink));
	});


	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + surveyLink));
	});


	
	app.use(bodyParser.urlencoded({ extended: true }));

	app.post('/', function(req, res) {
	  res.json(req.body); // req.body is your form data
	});



// }





// ==============================================================================
// LISTENER
// Starts the server to begin listening 
// ==============================================================================
app.listen(PORT, function() {
	console.log("App listeing on PORT: " + PORT);
});