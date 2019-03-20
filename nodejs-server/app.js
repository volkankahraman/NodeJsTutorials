var http = require('http');

var server = http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Heyyyy bunu sunucu gonderdi');
    
});

server.listen(3000,'localhost');
console.log('Server is listening port 3000');

