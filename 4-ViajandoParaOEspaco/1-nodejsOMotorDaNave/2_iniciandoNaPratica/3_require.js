// require => maneira de chamar modulos nativos do node ou modulos criados e instalados no node

// => módulos nativos
const path = require('path')

console.log(path.basename(__filename))
console.log(path.basename("nodejs/2/3_require.js"))