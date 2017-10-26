var greetMessage = require('./language.json');

var greet = function(){
  console.log(greetMessage.en);
}
module.exports = greet;