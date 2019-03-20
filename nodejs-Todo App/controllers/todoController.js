var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the Database
mongoose.connect('mongodb+srv://todoapp_user:todoapp123@cluster0-c0pzr.azure.mongodb.net/test?retryWrites=true');

//Create schema
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);


var data =[{item: 'yap birşeyler'}, {item: 'yaparsın'}, {item: 'aslansın'}];
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/todo', function(req,res){
        //get items from mongoDb
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlEncodedParser, function(req,res){
        //get data from the view and add it to mongoDb
        var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
        
    });

    app.delete('/todo/:item', function(req,res){
        //delete item from the view and add it to mongoDb
        Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if(err) throw err;
            res.json(data);
        });
    });
};