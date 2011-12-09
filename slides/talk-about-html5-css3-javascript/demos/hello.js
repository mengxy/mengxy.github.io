var http = require('http');

http.createServer(function (req, res) {
  // res.end("Hello World");
  res.end('<h1>Hello World</h1>');
}).listen(7878, "127.0.0.1");

console.log('Server running at http://127.0.0.1:7878/');
