var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('event',function(msg){
    console.log(msg);
});

myEmitter.emit('event','event emitted')

///////////////////////////////////
var util = require('util');

var Person = function(name){
    this.name = name;
}


util.inherits(Person, events.EventEmitter)

var soner = new Person('Soner');
var sayin = new Person('Şayin');
var volkan = new Person('Volkan');
var people = [soner,sayin,volkan];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ': '+ msg);
    });
});


soner.emit('speak','Sa Beyler');
sayin.emit('speak','Iğggghhh');
volkan.emit('speak','As sa');

