var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/profile/:name', function(req,res){
    var data = {age:21,job:'Mühendis'}
    res.render('profile', {name: req.params.name,data: data});
});

app.listen(3000);

