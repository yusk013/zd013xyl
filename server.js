var http = require('http');
var port = 18080;
var path = require('path');

var express = require('express'),
    exphbs = require('express-handlebars');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('html', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index', { layout: false });
});

app.listen(port);
