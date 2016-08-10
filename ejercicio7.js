// function callback (response) { /* ... */ }
// response.on("data", function (data) { /* ... */ })
// setEncoding()  utf8

/*------------------------*/

var http = require('http');
var url = process.argv[2];


http.get(url, function (res) {
  res.on("data", function (chunkData){
  	var strData = chunkData.toString();
  	console.log(chunkData);
  })
});


// OPTION 1
// http.get(url, function (res) {
// 	res.setEncoding('utf8')
//   res.on("data", function (strChunkData){
//   	console.log(strChunkData);
//   })
// });

//OPTION 2
// http.get(url, function (res) {
// 	res.setEncoding('utf8')
//   res.on("data", handleStrChunkData){
//   	res.on("data",console.log);
//   }

//  function handleStrChunkData(data) {
// 	console.log (data);
// }

















