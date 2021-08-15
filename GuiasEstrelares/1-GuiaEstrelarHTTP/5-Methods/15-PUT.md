<h1>PUT</h1>

- Criar um novo ou atualizar um recurso
    - PUT/profile HTTP/1.1
    - criação -> Status code 201
    - Atualização -> Status code 204 ou 200
- Características 
    > Seguro: não
    > Idempotente: sim
    > body 
        request: sim
        response: não
    > Uso de formulários HTML: não
    > Não é cacheable