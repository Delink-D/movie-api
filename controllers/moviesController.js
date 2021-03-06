// have all the controller hold all other functions 
// for better testing
var movieController = function(Movie) {

	// fnction to get all movies
	var get = function(req, res) {
		// the response to be sent when this request is made
		Movie.find(function(err, movie) {
			if (err) {
				res.status(500);
				res.send('Internal server Error!');
			}else{
				res.status(200);
				res.send(movie);
			}
		});
	};

	// function to save movies to db
	var add = function(req, res) {
		var movie = new Movie(req.body);
		movie.save(function(err) {
			if (err) {
				res.status(500);
				res.send('Error while saving, FAILED!');
			}else{
				res.status(201);
				res.send(movie);
			}
		});
	};

	// function to get movie byId
	var getById = function(req, res) {
		Movie.findById(req.params.id, function(err, movie) {
			if (err) {
				res.status(404);
				res.send("Movie Not Found!");
			}else{
				res.status(200);
				res.send(movie);
			}
		});
	};

	// function to update movie byId
	var update = function(req, res) {
		Movie.findById(req.params.id, function(err, movie) {
			if (err) {
				res.status(404);
				res.send("Movie Not Found!");
			}else{
				movie.title = req.body.title;
				movie.genre = req.body.genre;
				movie.rating = req.body.rating;
				movie.isReleased = req.body.isReleased;

				movie.save(function(err) {
					if (!err) {
						res.status(200);
						res.send(movie);
					}else{
						res.status(500);
						res.send("Failed!");
					}
				});
			}
		});
	};

	// function to update a movie using patch
	var patch = function(req, res) {
		Movie.findById(req.params.id, function(err, movie) {
			if (!err) {
				if (req.body._id) {
					delete req.body._id;
				}

				for(var p in req.body){
					movie[p] = req.body[p];
				}

				movie.save(function(err) {
					if(!err){
						res.status(200);
						res.send(movie);
					}else{
						res.status(500);
						res.send("Failed!");
					}
				});
			}
		});
	}

	// function to delete a movie object
	var del =  function(req, res) {
		Movie.findById(req.body._id, function(err, movie) {
			movie.remove(function(err) {
				if (!err) {
					res.status(204);
					res.send("Movie was removed");
				}
			});
		});
	};
	
	return{
		get: get,
		add: add,
		getById: getById,
		update: update,
		patch: patch,
		del: del
	}	
}

module.exports = movieController;