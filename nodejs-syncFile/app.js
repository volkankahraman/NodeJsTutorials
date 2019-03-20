var fs = require('fs');
/*
var readMe = fs.readFileSync('readMe.txt', 'utf-8');
console.log(readMe);*/

fs.readFile('readMe.txt', 'utf-8',function(err, data){
    fs.writeFileSync('writeMe.txt',data);
});
