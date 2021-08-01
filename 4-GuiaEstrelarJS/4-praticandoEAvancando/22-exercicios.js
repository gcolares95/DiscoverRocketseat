// 1. Declare uma variável de nome weight
// let weight;

// 2. Que tipo de dado é a variável acima?
// let typeWeight = typeof weight;

// console.log(typeWeight);
/* 
  3. Declare uma váriavel e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/

// let name = "Guilherme";
// let age = 18;
// let stars = 4.5;
// let isSubscribed = true;

// console.log(name);
// console.log(age);
// console.log(stars);
// console.log(isSubscribed);

/*
   4. A variável student abaixo é de que tipo de dado?

   4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

   4.2 Mostre no console a seguinte mensagem:

   <name> de idade <age> pesa <weight> kg.

   Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

 */

/* 
  let student = {
  name: "adam",
  age: 28,
  weight: 84,
  isSubscribed: true
};
*/

// console.log(`${student.name} tem ${student.age} pesa ${student.weight} kg`);

/* 
  5. Declare uma variável do tipo Array, de um nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

// let students = [];

/* 
  6. Reatribua valor para a variável acima, colocando dentro dela o o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array.
*/

// students = [student];

// console.log(students);

/* 
  7. Coloque no console o valor da posição zero do Array acima.
*/
// console.log(students[0]);
 
/* 
  8. Crie um novo student e coloque na posição 1 do Array students.
*/
/*
const student1 = {
  name: "sergio",
  age: 32,
  weight: 90,
  isSubscribed: false
}

students = [
    student,
    student1];

console.log(students[1]);
*/

/*
  9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua reposta, rode o código e veja se você acertou.
*/

console.log(a)
let a = 1
// resposta: "hoisting", o console irá mostrar undefined, pois o interpretador do JS, sabe que a variável foi criada, porém ainda não foi atribuida um valor;
