// require express a node framework
var express = require('express');

// require the model
var Movie = require('./../models/moviesModels');

var moviesController = require('./../controllers/moviesController')(Movie);

/*
	List of movies route starts
*/
var movieRouter = express.Router();

movieRouter.route('')
	.get(moviesController.get)		// route to get all movies
	.post(moviesController.add) 	// route to add new movie to db
	.delete(moviesController.del); 	// route to delete a record

// a route to get a movies by id
movieRouter.route('/:id')
	.get(moviesController.getById)	// route to get a movie by id
	.put(moviesController.update) 	// route to update a movie using put
	.patch(moviesController.patch) 	// route to update a movie using patch

// export movieRouter
module.exports = movieRouter;