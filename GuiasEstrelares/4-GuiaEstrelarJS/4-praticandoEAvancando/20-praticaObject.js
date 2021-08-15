// Object

// creating an empty object
const human = {};

console.log(human);
console.log(`o tipo da const human é: ${typeof human}`);

// creating an object
const person = {
  name: "Rubson",
  age: 30,
  weight: 88.6,
  isAdmin: true,
  greeting: function() {
    console.log('hello');
  }
};

console.log(person);
console.log(person.name);
console.log(person.greeting());