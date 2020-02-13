// // > node fetcher.js http://www.example.com/ ./index.html
// // Downloaded and saved 3261 bytes to ./index.html

// // Use the request library to make the HTTP request
// // Use Node's fs module to write the file
// // Use the callback based approach we've been learning so far
// // Do not use the pipe function
// // Do not use synchronous functions (see warning below)

// //HTTP requests must contain the verb/method (eg: GET) and the Path (eg: /about)
// //Requests and responses both contain key-value based headers (eg: Accept-Language: fr, Content-Type: text/html, etc.)

// let arg = process.argv
// let website = arg[2];
// let file = arg[3];
// let fs = require('fs');
// const request = require('request');

// request( website, (error, response, body) => {
//   // console.error('error:', error); // Print the error if one occurred
//   // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the Google homepage.

//   fs.writeFile(file, body , function (err) {
//     if (err) throw err;
//     console.log(`Downloaded and saved 1235 bytes to ${file}`);
//   });
// });


// // console.log("HTTP request for: " , website, "\nData saved to: " ,file);

const request = require('request');
let fs = require('fs')
// const argv = process.argv.slice(2);
let url = process.argv[2];
let filePath = process.argv[3];
request(url, (error, response, body) => {
  // console.log(“error:“, error); // Print the error if one occurred
  // console.log(“statusCode:“, response && response.statusCode); // Print the response status code if a response was received
  // console.log(“body:“, body); // Print the HTML for the Google homepage.
fs.writeFile(filePath, body, function(err) {
  if (err) throw err;
  console.log('Saved!');
});
});