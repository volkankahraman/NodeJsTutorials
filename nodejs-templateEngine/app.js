var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact',function(req,res){
    res.send('Contact Page <a href="/">Home Page</a>');
});

app.get('/profile/:name', function(req,res){
    var data = {age:21,job:'Mühendis'}
    res.render('profile', {name: req.params.name,data: data});
});

app.listen(3000);

