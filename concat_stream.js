var split = require('split');
var concat = require('concat-stream');
var through = require('through2');

var streamThatDoTheMagicToReverse = concat(reverseContent);

process.stdin
    .pipe ( streamThatDoTheMagicToReverse )
    .pipe ( process.stdout )

function reverseContent( buffer ) {
    var myStrContent = buffer.toString();
    var reversedText = myStrContent.split("").reverse().join("");
    console.log ( reversedText )
}