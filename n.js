var http = require('http');
var url = require('url');
var fs = require('fs');
var admin = require("firebase-admin");
var serviceAccount = require("./key.json");
var dt = require("./is");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ppoo-8be96.firebaseio.com",
  authDomain: "ppoo-8be96.firebaseapp.com",
});
http.createServer(function (req, res) {
  var db = admin.firestore();
  var realUrl = (req.encrypted ? 'https' : 'http') + '://' + req.headers.host + req.url;
  var q = url.parse(realUrl, true);//var q = url.parse(req.url, true);
  let d =new dt();
  if(q.hostname.toString()=="eg55.herokuapp.com")d.date.setHours(d.l_h24+2);
  q["this_time"] = d.l_now_all;
  if (req.method == "POST") {
    req.on('data', function (v) {
      var post = JSON.parse('{"' + decodeURIComponent(v).replaceAll("+", " ").replaceAll("&", '","').replaceAll("=", '":"') + '","url":'+JSON.stringify(q)+'}');
      if(post.hasOwnProperty("do")){
        if(q.hostname.toString()=="eg55.herokuapp.com")db.collection('do').doc(d.l_now_short + " " + q.pathname.slice(1, -1).replaceAll("/", " ")).set(post);
      } else {
        if(q.hostname.toString()=="eg55.herokuapp.com")db.collection("post").doc(d.l_now_short + " " + q.pathname.slice(1, -1).replaceAll("/", " ")).set(post);
      }
      res.end();
    });
  } else if ((q.pathname.slice(-1) != "/") && ((fs.existsSync("./html" + q.pathname) && !fs.lstatSync("./html" + q.pathname).isFile()) || (!fs.existsSync("./html" + q.pathname)))) {
    res.writeHead(302, {
      'Location': q.pathname + "/"
    });
    res.end();
  } else if (q.pathname.slice(-10) == 'index.html' && fs.existsSync("./html" + q.pathname)) {

    res.writeHead(302, {
      'Location': q.pathname.slice(0, -10)
    });
    res.end();
  } else {
    var filename = ((q.pathname.slice(-1) == "/") ? ("./html" + q.pathname + 'index.html') : ("./html" + q.pathname));
    if (!fs.existsSync(filename)) {
      filename = "./html" + "/404/index.html";
    }
    if (Object.keys(q.query).length > 0) {
      if(q.hostname.toString()=="eg55.herokuapp.com")db.collection('get').doc(d.l_now_short + " " + q.pathname.slice(1, -1).replaceAll("/", " ")).set(JSON.parse(JSON.stringify(q)));
    }
    fs.readFile(filename, function (err, data) {
      res.write(data);
      //console.log(q.pathname + " - " + filename + " - " + req.method)
      res.end();
    });
  }
  //}).listen(80);
}).listen(process.env.PORT || 5000);