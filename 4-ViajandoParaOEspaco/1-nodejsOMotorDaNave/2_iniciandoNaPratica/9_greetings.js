const getFlag = require('./8_flags');

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}`);