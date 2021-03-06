var http = require('http');
var path = require('path');

var express = require('express');
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

console.log('Booting up the server! Please wait until finished...')
server.listen(process.env.PORT || 3000, function(){
  var addr = server.address();
  console.log("All ready! Server listening at", addr.port);
});