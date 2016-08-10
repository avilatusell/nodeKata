var fs = require('fs')
var split = require('split');
var through = require('through2');

var fileStream = fs.createReadStream('data.txt');
var writeStream = fs.createWriteStream('output.txt');
var counter = 0;
//var finalContent = "";

// linedFileStream.on('data', function ( myLine ) {
// 		counter++;
// 		console.log ("(" + counter + ") " + myLine.toString() );
// 		finalContent += myLine.toString();
// 	})

fileStream
	.pipe( split() )
	.pipe(through(function( line, _ , next) {
		var strLine = line.toString();
		var strLine = strLine.replace("fuck", "********");
		var strLine = strLine.replace("shit", "########");
		var strLine = strLine.replace("bitch", "%%%%%%%");
		this.push( strLine + "\n");
		next();
	}))
	.pipe( writeStream )