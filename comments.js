// Create web server
// Create a server that listens on port 4000
// Create a route that listens to GET requests on the /comments path
// When a GET request is made to the /comments path, read the comments.json file and respond with the comments as JSON
// When the server is running, visit http://localhost:4000/comments in your browser to see the comments

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/comments') {
    fs.readFile('comments.json', 'utf8', function(err, data) {
      if (err) {
        throw err;
      }
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(data);
    });
  }
}).listen(4000);

console.log('Server running at http://localhost:4000/');