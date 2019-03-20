/*function callFunction(func){
    func();
};

var App = function(){
    console.log("App is launched");
};

callFunction(App);

*/
var app = require('./counter');


console.log(app.counter(['volkan','soner','şayin']));
console.log(app.adder(2,3));
console.log(app.pi);