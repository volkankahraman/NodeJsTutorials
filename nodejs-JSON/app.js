var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log(req.connection.remoteAddress+ " Bağlandı");
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj = {
        name: 'Volkan',
        job: 'Yazılım Mühendisi',
        age: 21
    }
    res.end(JSON.stringify(myObj))
});

server.listen(3000, 'localhost');
console.log("Sunucu 3000 portundan dinleniyor...");