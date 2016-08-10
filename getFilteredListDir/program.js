
var getFilteredListDir = require('./getFilteredListDir.js')

var pathDir = process.argv[2];
var extensionFile = process.argv[3];

var handleFilteredResults = function(err, aFilesFiltered) {
	if (err) throw err;
	aFilesFiltered.forEach(function(fileName, i){
		console.log (fileName);
	})
}

getFilteredListDir(pathDir, extensionFile, handleFilteredResults)

