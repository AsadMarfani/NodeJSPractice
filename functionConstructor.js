function FunctionConstructor(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

FunctionConstructor.prototype.greet = function(){
  console.log('Functioin Constructor : ', this.firstName, this.lastName);
}

var character = new FunctionConstructor('Asad', 'Marfani');
console.log('Charater Name is : ', character.firstName, character.lastName);
character.greet();

var characterSecond = new FunctionConstructor('Anas', 'Marfani');
console.log('Charater Name is : ', characterSecond.firstName, characterSecond.lastName);
characterSecond.greet();

console.log(character.__proto__);
console.log(characterSecond.__proto__);
console.log(character.__proto__ === characterSecond.__proto__);