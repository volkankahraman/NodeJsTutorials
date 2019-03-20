var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log(req.connection.remoteAddress + 'Bağlandı.' + req.url);
    if(req.url === '/home'  || req.url === '/'){
        res.writeHead(200,{'Content-Type':'Text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'Text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/api'){
        res.writeHead(200,{'Content-Type':'application/JSON'});
        var yikiklar = [{name : 'volkan', age: 21},{name : 'şayin', age: 21}];
        res.end(JSON.stringify(yikiklar));
    }else{
        res.writeHead(404,{'Content-Type':'Text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000,'localhost');
console.log("Sunucu 3000 portundan dinleniyor.");