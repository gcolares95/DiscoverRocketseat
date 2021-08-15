// const e let são locais e só funcionam no oscopo onde foi criada

const y = 2;

{
  const y = 0

  console.log('> existe y antes?', y)
}

console.log('> existe x depois do bloco?', y)