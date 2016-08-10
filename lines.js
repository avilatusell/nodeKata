var through = require('through2');
var split = require('split');
var counter = 0;

var transform = function (lineChunk, _ , next) {
    	var strLine = lineChunk.toString();
    	counter++ ;
			if(counter % 2 === 0) {
				strLine.toUpperCase();
			} else {
				strLine.toLowerCase();
			}
		
    	// this.push(strLine + '\n');
    	next();
    };


process.stdin
    .pipe(split())
    .pipe(through(transform))
    .pipe(process.stdout)



/*soultion

var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
;*/

