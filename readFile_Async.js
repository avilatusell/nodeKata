var fs = require('fs');
var pathFile = process.argv[2];

fs.readFile(pathFile, function(err, contentFileBuffer ) {

	var contentFile = contentFileBuffer.toString();
	var lines = contentFile.split("\n")
	var newlines = lines.length-1;

	console.log (newlines);

});
