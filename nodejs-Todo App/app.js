var express = require('express');
var todoController = require(__dirname + '/controllers/todoController.js');

var app = express();

// Template Engine
app.set('view engine','ejs');

// Static Files
app.use(express.static(__dirname + '/public'))

todoController(app);

app.listen(3000);