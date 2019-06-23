//use http moddule
var http = require('http');
var fs = require('fs');

var separate = require('./separate')
http.createServer(separate.takeRequest).listen(8080);