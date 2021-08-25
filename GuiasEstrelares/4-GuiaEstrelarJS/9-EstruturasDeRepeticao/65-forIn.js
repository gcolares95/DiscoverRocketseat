// for...in

let person = {
  name: 'Guilherme',
  age: 30,
  weight: 88.3
}

for(let property in person) {
  // console.log(property)
  // console.log(person["name"])
  // console.log(person.name)
  console.log(person[property])
}