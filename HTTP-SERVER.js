var http = require('http');
var through = require('through2');

/* through */
var streamHandlerRequest = through( writeUpperCase );
function writeUpperCase( bufferChunk, _ , next ) {
	strChunk = bufferChunk.toString();
	this.push( strChunk.toUpperCase() );
	next();
}

var server = http.createServer();

server.on("request", function( request, response ) {

	if (request.method === "POST") {
		request
			.pipe( streamHandlerRequest )
			.pipe( response ) // writes in the client's device
			//.pipe( process.stdout ) // writes in the server's console
	}
	else {
			console.log ("gimme POST please...");
	}


})

server.on("listening", function() {
	console.log ("listening on port 3004...");
});

server.listen(3004);