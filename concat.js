var split = require('split');
var concat = require('concat-stream');
var through = require('through2');


var stream = concat(transform);

function transform (buffer) {
	var newChunk = buffer.toString();
	var reversedText = newChunk.split("").reverse().join("");
	console.log(reversedText)
};


process.stdin
    .pipe(stream)
    .pipe(process.stdout)



