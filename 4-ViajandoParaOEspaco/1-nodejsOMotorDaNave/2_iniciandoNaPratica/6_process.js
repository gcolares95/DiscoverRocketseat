// process é um objeto que ta falando sobre o processo que está sendo rodado no node.

// console.log(process)

// argv é um array que retorna uma lista de argumentos que estou rodando no node
// console.log(process.argv)

// ------------------------
// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Olá ${firstName} ${lastName}`);

/* 
 Ao inves de no terminal chamar:

 6_process.js guilherme colares

 podemos chamar utilizando as flags:
  6_process.js --name "guilherme" --lastname "colares" 
*/
console.log(process.argv)