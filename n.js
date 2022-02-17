var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  if (req.method == "POST") {
    req.on('data', function (v) {
      var post = JSON.parse('{"' + decodeURIComponent(v).replaceAll("+", " ").replaceAll("&", '","').replaceAll("=", '":"') + '"}');
      //console.log(post);
    });
    res.end();
  } else if ((q.pathname.slice(-1) != "/") && ((fs.existsSync("./html" + q.pathname) && !fs.lstatSync("./html" + q.pathname).isFile()) || (!fs.existsSync("./html" + q.pathname)))) {
    res.writeHead(302, {
      'Location': q.pathname + "/"
    });
    res.end();
  } else {
    var filename = ((q.pathname.slice(-1) == "/") ? ("./html" + q.pathname + 'index.html') : ("./html" + q.pathname));
    if (!fs.existsSync(filename)) {
      filename = "./html" + "/404/index.html";
    }
    fs.readFile(filename, function (err, data) {
      res.write(data);
      //console.log(q.pathname + " - " + filename + " - " + req.method)
      res.end();
    });
  }
}).listen(80);