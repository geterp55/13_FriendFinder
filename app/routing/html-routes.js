//Your html-routes.js file should include two routes:

//A GET Route to /survey which should display the survey page.
//A default USE route that leads to home.html which displays the home page.

//DEPENDENCIES
var path = require('path');



//ROUTING

module.exports = function(app) {

	// app.get('/', function(req, res){
	// res.sendFile(path.join(__dirname, 'home.html'));
	// })

	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey2.html'));
	});


}

	
