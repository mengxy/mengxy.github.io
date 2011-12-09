var http = require('http');

http.createServer(function (req, res) {
  var options = {
    host: 'www.google.com',
    port: 80
  }
  var request = http.get(options, function(response) {
    var body = "";
    response.setEncoding("utf8");
    response.on("data", function(chunk) {
      body += chunk;
    });

    response.on("end", function() {
      res.end(body);
    });
  });
}).listen(7878, "127.0.0.1");

console.log('Server running at http://127.0.0.1:7878/');
