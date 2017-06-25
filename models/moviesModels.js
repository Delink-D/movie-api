// require mongoose from dependancies
var mongoose = require('mongoose');
var schema = mongoose.Schema; // schema is found in the mongoose

// initiating a movie model with all the proerties
var movieModel = new schema({
	title: String,
	genre: String,
	rating: Number,
	isReleased: {
		type: Boolean,
		default: true
	}
});

// export the model
module.exports = mongoose.model("Movie", movieModel);