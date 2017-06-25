// require express a node framework
var express = require('express');
var app = express();

// setting up of router
/*
	List of movies route starts
*/
var movieRouter = express.Router();
movieRouter.route('')
	.get(function(req, res) {
	// the response to be sent when this request is made
	res.send('List of movies!');
});

// when this url with /movies is called use movieRouter function
app.use('/movies', movieRouter);
/*
	./ List of movies route ends
*/

// setting of app to listen to port: 3000
app.listen(3000, function() {
	console.log("App listening to port: 3000");
});