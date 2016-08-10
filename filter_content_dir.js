var fs = require('fs')
var path = require('path');
//var utils = require('./utils.js')
var pathDir = process.argv[2];
var extensionFile = process.argv[3];

console.log ('the path required is ' + pathDir)
console.log ('the extension required is ' + extensionFile)

fs.readdir(pathDir, function(err, filesNames){
	var filteredFiles = filesNames.filter(function(fileName,i) {
		// return utils.hasProperExtension(fileName, extensionFile) // true or false
		return fileName.split('.').pop() === extensionFile;
		//return path.extname(fileName) === extPattern;
	})
	console.log ("the (filtered) content of the folder is = " + filteredFiles);
})



