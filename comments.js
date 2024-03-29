// create web server and listen to port 8080
// return comments in JSON format
var http = require('http');
var comments = require('./comments.json');

http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  response.end(JSON.stringify(comments));
}).listen(8080);
console.log('Server is running at http://localhost:8080/');