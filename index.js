var http = require('http');
var port = 3006;
http.createServer(function (req, res) {

  //A parsed url to work  with in case there are parameters
  var url = req.url;

  //in case the client uses lower case for methods
  req.method = req.method.toUpperCase();
  console.log(req.method + '  ' + req.url);
  if (req.method !== 'GET') {
    res.writeHead(501, {
      'Content-Type': 'text/plain',
    });
    return res.end(req.metohd + 'is not implemented by this server');
  }

  if (req.url == '/employees') {
    //returns a list of employees
    res.writeHead(200);
    return res.end('employee list');
  } else if (req.url == '/employees/') {
    //find a single employee
    url.id  = url.split('/')[2];
    res.writeHead(200);
    return res.end(' a single employee');
  } else {
    //try to send a static file
    res.writeHead(200);
    res.end('Static file');
  }
}).listen(port, '127.0.0.1');
console.log('Server running at ' + port);
