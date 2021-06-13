<h1>DELETE</h1>

- Remover um recurso
    > DELETE/posts HTTP/1.1
    > status code
        202: accepted
        204: no content
        200: ok

- Características 
    > Seguro: não
    > Idempotente: sim
    > body 
        request: possibilidade
        response: possibilidade
    > Uso de formulários HTML: não
    > Não é cacheable