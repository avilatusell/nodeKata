//Write a program that accepts one or more numbers as command-line arguments
//and prints the sum of those numbers to the console (stdout).


// var fs = require('fs');

// // (0) node (1) app.js (2) "myFile.txt" (3) "and this is my content..."
// var contentFile = process.argv[3];
// var fileName = process.argv[2]


// fs.writeFile(fileName, contentFile, function(err) {

//   if (err) throw err;
//   console.log('It\'s saved!');

//   fs.readFile(fileName, 'utf8', function (err, data) {

//   	if (err) throw err;
//   	console.log(data);

//   })

// });


if ( process.argv.length < 2) {
	console.log("there are no numbers");
	} else {
		var sum = Number(process.argv[2]);
		for ( i = 3; i < process.argv.length; i++ ) {
			sum = sum + Number(process.argv[i]);
		}
	}

 console.log(sum);