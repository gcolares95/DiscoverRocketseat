// const e let são locais e só funcionam no oscopo onde foi criada

let y = 2;

{
  y = 0

  console.log('> existe y antes?', y)
}

console.log('> existe x depois do bloco?', y)