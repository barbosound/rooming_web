var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var roomingApi = require('./rooming');

app.use(bodyParser.json({ type: 'application/json'}));

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req,res){
    var r = roomingApi.getAllRoom();
    var f = roomingApi.getAllFoto();
    res.render('index', {'rooms':r, 'fotos':f});
});

app.get('/login', function(req,res){
    res.render('login');
});

app.get('/categories', function(req,res){
    res.render('categories');
});

app.get('/register', function(req,res){
    res.render('register');
});

app.get('/plantilla', function(req,res){
    res.render('plantilla');
});

app.get('/rooms', function(req,res){
    res.render('room');
});

app.get('/profile', function(req,res){
    res.render('profile');
});

app.listen(3000);