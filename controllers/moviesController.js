// require the model
var Movie = require('./../models/moviesModels');

// fnction to get movies
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
	})
}

// function to save movies to db
var add = function(req, res) {
	var movie = new Movie(req, body);
	movie.save(function(err) {
		if (err) {
			res.status(500);
			res.send('Error while saving, FAILED!');
		}else{
			res.status(201);
			res.send(movie)
		}
	});
}

// module.exports = get;
// module.exports = add;
module.exports = {
	get: get,
	add: add
}