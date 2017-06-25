// require the model
var movie = require('./../models/moviesModels');

var get = function(req, res) {
	// the response to be sent when this request is made
	movie.find(function(err, movies) {
		if (err) {
			res.status(500)
			res.send('Internal server Error!');
		}else{
			res.status(200)
			res.send(movies);
		}
	})
};

module.exports = get;