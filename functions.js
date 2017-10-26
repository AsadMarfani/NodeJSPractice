function greet(){
    console.log('Hello In greet function');
}
greet();

function logGreeting(fn){
  fn();
}
logGreeting(greet);

var greetFunction = function(){
  console.log('Hello Marfani from function expression');
}
greetFunction();

//it's first-class function
logGreeting(greetFunction);

//use a function expression on the fly
logGreeting(function(){
  console.log('Hello from callback...');
})