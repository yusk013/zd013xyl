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

app.get('/test', function (req, res) {
    console.log(3333);
    var data;
    var mysql = require('mysql');
    var conn = mysql.createConnection({
        host: 'sqld.duapp.com',
        port: 4050,
        user: '9xqkpoYbvCHkvcVdzHU6mBcW',
        password: 'gHS4N5gSsGhiBEOgIowOxN1V6DqVp4B9',
        database: 'zZASqDdjvmjrjwVARHHT',
    });
    conn.query("select * from test where id = 3", [], function (err, result) {
        if (!err) {
            console.log(result);
        }
        res.render('test', { result: result, err: err }, { layout: false });
    });
    //res.render('test', { layout: false, title: "你们好", name: "335553", err: "444" });
});
app.get('/', function (req, res) {
    res.render('index', { layout: false });
});

app.listen(port);
