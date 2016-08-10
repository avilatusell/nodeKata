var split = require('split');
var through2 = require('through2');
var counter = 1;

var streamProcesserLines = through2( processOddEvenLines );

process.stdin
    .pipe( split() )
    .pipe( streamProcesserLines )
		.pipe( process.stdout );


function processOddEvenLines( lineChunk, _, next ) {
		var strLine = lineChunk.toString();
		var isEven = (counter%2 === 0);
		this.push ( getFormattedLine(strLine,isEven) + '\n' );
		counter++;
    next();
}

function getFormattedLine ( txt, isEven ) {
	return isEven ? txt.toUpperCase() : txt.toLowerCase();
}

// echo -e 'one\ntwo\nthree\ntwo\nthree\ntwo\nthree\ntwo\nthree\ntwo\nthree' | node app.js