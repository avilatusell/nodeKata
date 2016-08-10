var through = require('through2');
var http = require ('http');

var server = http.createServer();

server.on("request", function(request, response) {

	if (request ==="POST") {
		console.log(request.toUpperCase())
	} else {
		console.log("you need a request")

	}
})

//request.on("data", function(data) escucho el elemento data


