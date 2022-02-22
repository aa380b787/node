var http = require('http');
var url = require('url');
var fs = require('fs');

var admin = require("firebase-admin");
var serviceAccount = require("./key.json");

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://ppoo-8be96.firebaseio.com",
authDomain: "ppoo-8be96.firebaseapp.com",
});
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  if (q.pathname=="/test/") {
    //admin.database().ref("mmm").once('value',function(snap){snap.val().toString()//admin.firestore().collection('m1').get().then(function(v){
      admin.firestore().collection("m1").get().then(function(snap){
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write(JSON.stringify(snap.docs.map(doc => doc.data())));
    res.end();
      })
  }else{
  if (req.method == "POST") {
    req.on('data', function (v) {
      var post = JSON.parse('{"' + decodeURIComponent(v).replaceAll("+", " ").replaceAll("&", '","').replaceAll("=", '":"') + '"}');
      fs.readFile('./html/t.txt', (err, data) => {
        fs.writeFile("./html/t.txt",
        data + q.pathname + "      " + JSON.stringify(post) + "\n" , function (err) {
            res.end();
          });
      });
    });
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
  }}
//}).listen(80);
}).listen(process.env.PORT || 5000);