// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================


//Your api-routes.js file should contain two routes:

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.



var friendArray = require('../data/friends.js');
var path			= require('path');

// ROUTING

module.exports = function(app){


	app.get('/api/friends', function(req, res){
		console.log(req.body('friendArray.friendName'));
		var friendName = req.body('friendArray.friendName');
		// var friendEmail = req.body('friendArray.friendEmail');
		

		res.json(friendName + friendEmail);
		// res.json(friendName + friendEmail + friendID + phoneNumber);	
			
		});

	app.post('/api/friends', function(req, res){
		friendArray.push(req.body);
		res.json(true);

		// var friendName = req.body.friendArray.friendName;
		// var friendEmail = req.body.friendArray.friendEmail;
		// var friendID = req.body.friendID;
		// var phoneNumber = req.body.phoneNumber;

		// res.json(friendName + friendEmail);
		// res.json(friendName + friendEmail + friendID + phoneNumber);

	});



}

