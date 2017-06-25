// require express a node framework
var express = require('express');
var movieRouter = require('./router/moviesRouter');
var app = express();

// when this url with /movies is called use movieRouter function
app.use('/movies', movieRouter);

// setting of app to listen to port: 3000
app.listen(3000, function() {
	console.log("App listening to port: 3000");
});