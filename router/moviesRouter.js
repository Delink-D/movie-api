// require express a node framework
var express = require('express');
var moviesController = require('./../controllers/moviesController');

/*
	List of movies route starts
*/
var movieRouter = express.Router();

movieRouter.route('').get(moviesController);
/*
	./ List of movies route ends
*/

// export movieRouter
module.exports = movieRouter;