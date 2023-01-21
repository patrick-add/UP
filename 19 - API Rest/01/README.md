
## Cadastro de alunos

Criei uma API REST para realização de cadastro de alunos, mas para satisfazer a demanda, foi necessário contemplar alguns requisitos e regras obrigatórios.

**Regras da API:**

-   Está disponível no endereço http://localhost:3000
-   Está seguindo o padrão REST, contemplando os métodos (verbos) **GET**, **POST** e **DELETE**.
-   Os códigos de status (status codes) a ser retornado segue a especificação de cada método (mais abaixo).
-   Possui apenas um recurso **alunos** que é acessado através do endereço http://localhost:3000/alunos
-   É organizado em diferentes camadas (dados, controladores, roteador, intermediarios). A organização é detalhada mais abaixo.
-   É protegida por uma autenticação simples através de senha passada por parâmetro do tipo query chamado **senha**. As regras da autenticação são explicadas mais abaixo.
-   Todos os métodos do recurso único **alunos** possui as validações necessárias que são detalhadas para cada método mais abaixo.
-   Na camada de dados existi uma coleção (array) de alunos, onde cada item é um objeto representando um aluno. **A coleção é iniciada vazia**.
-   Cada objeto alunos possui 5 propriedades:
    -   **id** (número)
    -   **nome** (string)
    -   **sobrenome** (string)
    -   **idade** (número)
    -   **curso** (string)

```json
//Exemplo de aluno

{
    "id": 3,
    "nome": "Marcos",
    "sobrenome": "Silveira",
    "idade": 36,
    "curso": "Programação do Zero"
}
```

**Organização do código da API:**

Abaixo é definida como é feita a organização do código desta API (as tabulações indica o nível hierárquico dos diretórios):

-   nome-do-projeto (raiz do projeto node)
    -   controladores (diretório)
        -   recurso-a.js
        -   recurso-b.js
        -   .
        -   .
        -   recurso-z.js
    -   dados (diretório)
        -   colecao-a.js
        -   colecao-b.js
        -   .
        -   .
        -   colecao-z.js
    -   index.js (arquivo principal do servidor)
    -   intermediarios.js (middlewares - se houver)
    -   roteador.js (configuração de rotas)

**Objeto de retorno em caso de erro de validação:**

```json
{
    "mensagem": "Esta é uma mensagem para explicar o erro e/ou código de status retornado."
}
```

**Autenticação simples - proteção por senha:**

Todas as requisições verifica se a senha está correta através de intermediário (middleware) e a senha correta é: **cubos123**.
Caso a senha não seja informada ou seja informada incorretamente, é retornado código 401 (Unauthorized - não autorizado) com uma mensagem de erro conforme padrão de retorno acima dizendo que a senha está incorreta.

**Especificações e validações de cada método:**

**A) GET**

**A1) GET sem parâmetros**

Não tem validações. Retorna a coleção completa (array completo) mesmo que ele esteja vazio.

O código de status retornado é  200 (Ok).

**A2) GET /:id (com parâmetro id)**

Retorna um objeto de aluno quando o mesmo existir para o ID informado com código de status 200 (Ok).

Caso o valor do parâmetro não seja um número válido retorna 400 (Bad Request) com mensagem dizendo que o ID deve ser um número válido.

Caso o parâmetro seja válido, mas não existir aluno para aquele número de ID, é retornado 404 (Not Found) com mensagem dizendo que o aluno não foi encontrado.

**B) POST**

Não recebe nenhum parâmetro, apenas o body (conteúdo) da requisição, que é um objeto json de aluno completo com as 4 propriedades exceto o ID que é controlado (gerado) pelo servidor e portanto não é informado no request.

É retornado 400 (Bad Request) com mensagem explicando o motivo do erro em qualquer um dos seguintes casos:

1. Qualquer uma das 4 propriedades (nome, sobrenome, idade ou curso) não estiver presente no objeto aluno a ser criado.
2. Qualquer uma das propriedades de texto (nome, sobrenome ou curso) possuir como valor string vazia ou string que possua apenas espaços.
3. Se a idade do aluno a ser adicionado for menor que 18 anos.

Caso o objeto aluno a ser adicionado passe em todas as validações acima, é retornado 201 (Created) sem qualquer conteúdo no body do response.

**C) DELETE**

Recebe apenas o parâmetro de rota **/:id** para indicar o id do aluno a ser excluído. Não recebe qualquer conteúdo no corpo (body) da requisição.

Caso o valor do parâmetro não seja um número válido é retornado 400 (Bad Request) com mensagem dizendo que o ID deve ser um número válido.

Caso não exista aluno para o id informado, é retornado 404 (Not Found) com a mensagem informando que o aluno a ser excluído não foi encontrado.

Caso exista na coleção um objeto de aluno com o id informado pelo parâmetro, o objeto é removido do array e é retornado status 200 (Ok) com o objeto removido no corpo (body) da resposta (response).


1. Criei um novo arquivo na camada de dados (**cursos.js**) para guardar e exportar um array de strings dos cursos válidos e adicionei às validações do POST uma verificação se o curso informado pelo request é um curso válido deste array de cursos.

2. Implementei os métodos PUT e PATCH com todas as validações que considerei necessárias de acordo com o que aprendi, retornando os status codes corretos seguindo o REST.
