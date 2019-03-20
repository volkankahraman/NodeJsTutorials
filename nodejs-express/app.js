var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('Home Page <a href="/profile/12">12.Kişi</a>');
});

app.get('/contact',function(req,res){
    res.send('Contact Page <a href="/">Home Page</a>');
});

app.get('/profile/:name', function(req,res){
    res.send(req.params.name + "'nın profili");    
});

app.listen(3000);

