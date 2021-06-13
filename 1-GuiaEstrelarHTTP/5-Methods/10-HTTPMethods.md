<h1>HTTP methods</h1>

- Definem um conjunto de métodos HTTP
- Indica a ação que o cliente deseja operar
- Podem ser chamados de verbos HTTP
- cada um possui a sua semântica
- características:
    > Seguros
        * não altera estado do servidor
        * somente leitura
        * cliente não solicita alterações
        * não há carga extra para o servidor
        * o servidor é responsável em manter o método seguro
        * quais são?
            GET -> GET/search HTTP/1.1
            HEAD
            OPTIONS

    > idempotente
        * Ao executar o método, a reposta deverá ser sempre a mesma
        * Quais são?
            Todos os seguros são idempotentes
            PUT
            DELETE
        * status code poderá ser diferente
        * o servidor tem responsabilidade de retornar os dados da mesma maneira
        * essa especificação não é garantia que todos os servidores vão aplicar os conceitos corretamente