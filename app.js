var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World from node.js');
});

var server = app.listen(3001, function(){
  console.log('Magic is happening on port 3001')
});
