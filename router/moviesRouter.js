// require express a node framework
var express = require('express');
var moviesController = require('./../controllers/moviesController');

/*
	List of movies route starts
*/
var movieRouter = express.Router();

movieRouter.route('')
	.get(moviesController.get)		// route to get all movies
	.post(moviesController.add); 	// route to add new movie to db

// a route to get a movies by id
movieRouter.route('/:id')
	.get(moviesController.getById)	// route to get a movie by id

// export movieRouter
module.exports = movieRouter;