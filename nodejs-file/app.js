var fs = require('fs');
var _file = 'files';
/*
fs.mkdir(_file, function(){
    fs.writeFile(_file+'/test.txt','aaaaaaa',function(){
    });
});*/
fs.unlink('./files/test.txt',function(){
    fs.rmdirSync(_file);
});

console.log('test');