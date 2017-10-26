var Emitter = require('events');
var eventEmitter =require('./Emitter/config').events;

// ==========================================
// var Emitter = require('./Emitter/emiiter');
// ==========================================
var emtr = new Emitter();


emtr.on(eventEmitter.GREET,function(){
  console.log('Greeting 1 from custom event');
});

emtr.on(eventEmitter.GREET,function(){
  console.log('Greeting 2 from custom event');
});

emtr.on(eventEmitter.GREET,function(){
  console.log('Greeting 3 from custom event');
});

console.log('Hello!!');

emtr.emit(eventEmitter.GREET);

// var greet = require('./greetFolder');

// ===================================================
// var greet1 = require('./ModulePatterns/greet1');
// greet1();

// var greet2 = require('./ModulePatterns/greet2').greet;
// greet2();

// var greet3 = require('./ModulePatterns/greet3');
// greet3.greet();
// greet3.greeting = 'Change the greet message';

// var greetTest = require('./ModulePatterns/greet3');
// greetTest.greet();

// var greet4 = require('./ModulePatterns/greet4');
// var greetObject = new greet4();
// greetObject.greet();

// var greet5 =require('./ModulePatterns/greet5');
// greet5.greet();
// ===================================================
// console.log(greet);

// ==================================
// greet.english();
// greet.spanish();
// ==================================

// =====================================
// var person = {
//   firstname: 'Asad',
//   lastname: 'Marfani',
//   greet: function () {
//     console.log('Hello, ', this.firstname, this.lastname);
//   }
// }
// person.greet();
// console.log(person['lastname']);
// =======================================