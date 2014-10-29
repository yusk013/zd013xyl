var http = require('http');
var port = 18080;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(port);
