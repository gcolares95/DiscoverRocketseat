// var é global, e também local
// hoisting (elevação)

console.log('> existe x antes do bloco? ', x)

{
  var x = 0
}

console.log('> existe x depois do bloco? ', x)