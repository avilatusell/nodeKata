var fs = require('fs')
var path = require('path')
var pathDir = process.argv[2];
var extensionFile = process.argv[3];

fs.readdir(pathDir, function(err, filesNames){

	var filteredFiles = filesNames.filter(function(fileName,i) {
		return path.extname(fileName) === "." + extensionFile;
	})

	filteredFiles.forEach(function(fileName,i) {
		console.log (fileName);
	})

})