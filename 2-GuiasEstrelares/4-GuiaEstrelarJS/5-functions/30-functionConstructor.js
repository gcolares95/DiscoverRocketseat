/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name, age, weight){
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.walk = function() {
    return this.name + ' está andando';
  }
};

const guilherme = new Person("Guilherme", 18, 90.5); // instanciando um novo objeto
const joao = new Person("Joao", 15, 60.5)
console.log(guilherme.walk());
console.log(joao.walk());