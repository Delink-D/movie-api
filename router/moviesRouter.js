// require express a node framework
var express = require('express');

/*
	List of movies route starts
*/
var movieRouter = express.Router();
movieRouter.route('')
	.get(function(req, res) {
	// the response to be sent when this request is made
	res.send('List of movies!');
});
/*
	./ List of movies route ends
*/

// export movieRouter
module.exports = movieRouter;