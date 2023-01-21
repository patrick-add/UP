
## Biblioteca Online

Neste exercício, criei o back-end de uma biblioteca online. Esta aplicação é uma API REST nodejs que é acessada através de `http://localhost:3000`.

Para atender a necessidade da biblioteca, foi necessário no servidor da aplicação um array de objetos chamado **livros**, que é uma coleção onde cada objeto representa um livro. Cada livro possui as propriedades: **id** (que é o identificador do livro), **titulo**, **autor**, **ano** e **numPaginas**.

Portanto no servidor existi um array como no exemplo abaixo:

```javascript
const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197,
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158,
    },
]
```

O sistema da biblioteca também possui os principais métodos para:
- **consultar a coleção**

- **consultar um livro através do ID**

- **adicionar um novo livro**

- **alterar um livro existente**

- **remover livros**

Para construir as funcionalidades, foi utilizados os verbos **HTTP**, seguindo o padrão **REST**. Todas as funcionalidades são acessadas através do recurso `http://localhost:3000/livros`.

Nos passos abaixo detalhaei como funciona cada um dos métodos:

**a) Consulta da coleção**

Através do método (verbo) **HTTP GET** é possível requisitar a completa coleção de livros.
Portanto, considerando o array de exemplo do início, ao requisitar o endereço `http://localhost:3000/livros` utilizando o **GET**, é retornado no body (corpo) da resposta (response):

```javascript
[
  {
      id: 1,
      titulo: "A Odisséia de Jonas",
      autor: "Thomas Crawling",
      ano: 2001,
      numPaginas: 197,
  },
  {
      id: 2,
      titulo: "Jonas e a sociedade escondida",
      autor: "Claire Crawling",
      ano: 2004,
      numPaginas: 158,
  },
]
```

**b) Consulta de um livro por ID**

Também utilizando o método **HTTP GET**, quando é realizada uma requisição ao recurso **livros** adicionando um parâmetro do tipo path (params), da seguinte forma: `http://localhost:3000/2`

Considerando o array de exemplo do início, é retornado o seguinte objeto JSON:

```json
{
  "id": 2,
  "titulo": "Jonas e a sociedade escondida",
  "autor": "Claire Crawling",
  "ano": 2004,
  "numPaginas": 158
}
```

Quando é enviado um valor que não seja um número válido para o parâmetro **ID** na URL, é retornado um objeto **JSON** com uma propriedade **mensagem** informando que o valor do parâmetro não é um número válido, conforme exemplo a seguir:

```json
{
  "mensagem": "O valor do parâmetro ID da URL não é um número válido."
}
```

Se o valor do parâmetro for um número válido, como por exemplo, `http://localhost:3000/99`, porém não existir um livro na coleção para aquele ID, é retornado um objeto JSON com a seguinte mensagem:

```json
{
  "mensagem": "Não existe livro para o ID informado."
}
```

**c) Adicionar um livro**

Para contemplar a funcionalidade de adicionar um livro à coleção, é utilizado o verbo **HTTP POST** no mesmo recurso `http://localhost:3000/livros`.

As requisições para este método possui em seu body (corpo), um objeto **JSON** com as propriedades que o livro deve ter na coleção, exceto o **ID** que é controlado automaticamente pelo servidor.

Portanto, a cada requisição **POST** a este recurso, o servidor encontra o próximo **ID** livre para poder utilizar no novo livro que é adicionado.

Considerando o array de exempl, quando for enviada uma requisição **POST** ao recurso **livros** com o seguinte objeto **JSON** em seu body (corpo):

```javascript
{
	"titulo": "Jonas e a pedra sentimental",
	"autor": "Clarice Crawling",
	"ano": "2015",
	"numPaginas": 184
}
```

O livro é adicionado à coleção utilizando o **ID 3** (já que o último ID utilizado foi 2), e o objeto criado é retornado no body (corpo) da resposta (response) conforme o seguinte JSON:

```javascript
{
  "id": 3,
  "titulo": "Jonas e a pedra sentimental",
  "autor": "Clarice Crawling",
  "ano": "2015",
  "numPaginas": 184
}
```

Após adicionar o livro, se tentar consultá-lo na mesma execução do servidor, ele vai estar presente na coleção.

**d) Substituindo um livro**

Utilizando o verbo **HTTP PUT** no recurso `http://localhost:3000/livros`, é possível substituir um livro utilizando o mesmo **ID** existente.

Para isso, o **ID** é informado no path da URL e o novo livro é enviado no body (corpo) da requisição (request) no mesmo formato de quando um livro é adicionado.

Portanto, considerando o array de exemplo, se for enviada a seguinte requisição:

PUT `http://localhost:3000/livros/2`

```json
{
  "titulo": "Jonas e a pedra sentimental",
  "autor": "Clarice Crawling",
  "ano": "2015",
  "numPaginas": 184
}
```

O livro enviado vai **substituir** na coleção, todos os valores das quatro propriedades do livro que existe com o **ID 2** e retorna o seguinte objeto com uma mensagem informando da alteração:

```json
{
  "mensagem": "Livro substituído."
}
```

Caso não exista um livro na coleção com o **ID** fornecido pela requisição, é retornado um objeto com a mensagem:

```json
{
  "mensagem": "Não existe livro a ser substituído para o ID informado."
}
```

**e) Alterando um livro**

Além de poder substituir um livro, é possível também alterar as proriedades de um livro, uma a uma, separadamente. Para isso, criei um método para atender requisições enviadas com o verbo **HTTP PATCH** para o recurso `http://localhost:3000/livros`.

Para esta requisição, deve ser enviado o **ID** do livro a ser alterado como parâmetro path (params) e um objeto **JSON** no body (corpo), que conterá apenas as propriedades que devem ser alteradas no livro com seus respectivos novos valores. Não é permitido alterar o **ID**.

Portanto, considerando o array de exemplo, quando for enviada uma requisição **PATCH** `http://localhost:3000/livros/1` com o seguinte body (corpo):

```json
{
	"titulo": "Jonas, o Guerreiro"
}
```

O valor da propriedade **titulo** do livro de **ID 1** da coleção é alterado e em seguida é retornado:

```json
{
  "mensagem": "Livro alterado."
}
```

Caso não exista um livro na coleção com o **ID** informado na requisição (request), é retornado:

```json
{
  "mensagem": "Não existe livro a ser alterado para o ID informado."
}
```

Este fluxo funciona para qualquer uma das propriedades existentes nos objetos de **livro**, inclusive quando mais de uma propriedade for enviada na requisição (request). A única propriedade que não pode ser alterada é o **ID** que é o identificador único de cada registro.

**f) Remoção de um livro**

Para finalizar, criei o método de remoção de livros da coleção utilizando o verbo **HTTP DELETE** em `http://localhost:3000/livros`.

A requisição para este método deve conter um parâmetro no path (params) da URL que deverá ser o **ID** do livro a ser removido, e não deve conter qualquer body (corpo).

Portanto, para o array de exemplo, caso seja enviada uma requisição **DELETE** `http://localhost:3000/livros/1`, é removido o livro que utiliza o **ID 1** e em seguida é retornado:

```json
{
  "mensagem": "Livro removido."
}
```

Caso não exista livro na coleção utilizando o **ID** enviado pela requisição (request), é retornado:

```json
{
  "mensagem": "Não existe livro a ser removido para o ID informado."
}
```

Após a criação de todos os métodos, testei todos eles em ordens variadas para verificar se funcionaria conforme esperado.
