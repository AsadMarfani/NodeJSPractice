var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var asynGreet = fs.readFile(__dirname + '/greet.txt', 'utf8', function (err, data) {
  console.log(data);
});

console.log('Done!');