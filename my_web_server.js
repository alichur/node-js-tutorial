var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Node.js world');
}).listen(8080);
console.log('server running on port 8080');
