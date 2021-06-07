Browser  -- request --> Servidor
Browser <-- response -- Servidor

- troca de mensagens entre o cliente e o servidor

<h1>Message</h1>

 # Pedido (request)
    > Methods 
        - Definição do tipo pedido
        - Qual ação eu quero fazer no servidor
        - Exemplo: 
            * Get - Pegar um recurso
            * Post - Criar um recurso
    > Headers
    > Body
       
 # Resposta (response)
    > Status Code
        - Resposta do servidor sobre o estado do pedido/resposta
        - Exemplo: 200, 301, 404, 500  
    > Headers
    > Body

 # Request / Response 
    > Headers
       * Campos informativos
        * Propriedade: valor
        * Exemplo: 
            Content-Type:application/json
            User-Agent:Chorme
            Request URL: www.google.com
        - Body
            * HTML
            * Content
            * JSON
  
  -------------------
> Recurso
    - Local que irei enviar o pedido
    - Usarei uma URL para acessar o recurso
    - Exemplo -> https://google.com/
    - htpps://localhost:3000/post?q=oracle




