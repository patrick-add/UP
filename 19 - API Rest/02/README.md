
## Lista de convidados

Criei o back-end de um sistema para controle de convidados de evento. Este controle de convidados é executado em um servidor nodejs e é acessado através do endereço http://localhost:3000.

O sistema possui uma lista de nomes dos convidados, e funcionalidades para poder: 
- **consultar a lista** de convidados **inteira**

- **consultar** se **um nome específico** existe na lista

- **adicionar** um nome na lista de convidados

- **remover** um nome da lista de convidados

Além dessas funcionalidades,  utilizei o **padrão REST** o mais fielmente possível.

A seguir, detalhai cada uma das funcionalidades necessárias, uma a uma, que está no mesmo script do servidor.

Todas as funcionalidades estão disponíveis em um recurso chamado **convidados** que é acessado através do endereço `http://localhost:3000/convidados`.

**a) Consultar a lista inteira de convidados**

Esta funcionalidade utiliza o método (verbo) **GET**. Ao ser requisitada, esta funcionalidade retorna no body (corpo) do response (resposta) um array de strings, onde cada item é um nome de convidado.

**Exemplo:**

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao requisitar esta funcionalidade, é retornado:

```javascript
[
  "Carlos",
  "Amanda",
  "Fernanda",
  "Juliana",
  "Lucas",
  "Roberto"
]
```

**b) Consultar se existe um nome específico na lista de convidados**

Adicionei uma funcionalidade à anterior de consulta. Adicionei a possibilidade de especificar um nome através de um parâmetro query chamado **nome** e é retornado se o nome existe ou não na lista.

Quando um valor for enviado na propriedade **nome** do tipo query, é retornado um objeto com apenas uma propriedade chamada **mensagem** que tem uma string informando se o nome existe na lista ou não. Caso não seja fornecido valor à propriedade **nome** é retornado o array completo da lista de convidados, conforme funcionalidade da letra **a)**.

**Exemplos:**

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao requisitar o recurso **convidados** com **GET** `http://localhost:3000/convidados?nome=Renato`, é retornado o seguinte objeto:

```json
{
  "mensagem": "O convidado buscado não está presente na lista."
}
```

E ao requisitar o recurso **convidados** com **GET** `http://localhost:3000/convidados?nome=Carlos`, é retornado o seguinte objeto:

```json
{
  "mensagem": "Convidado presente."
}
```

**c) Adicionar um nome na lista de convidados**

Fiz também uma funcionalidade para adicionar nomes à lista. Para isto, é utilizado o método (verbo) **POST** através do endereço `http://localhost:3000/convidados`.

O body (corpo) da requisição (request) é um objeto JSON onde existi apenas uma propriedade chamada **nome**, a qual possui como valor, uma string que é o nome do novo convidado a ser adicionado na lista.

Caso já exista na lista um nome idêntico ao fornecido pela requisição (request), é retornada uma resposta com o body preenchido com um objeto com apenas uma propriedade **mensagem** que tem como valor uma string que é a mensagem informando que o convidado já existe na lista.

**Exemplo:**

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao enviar uma requisição **POST** `http://localhost:3000/convidados` com o objeto a seguir no body (corpo) da requisição:

```json
{
	"nome": "Amanda"
}
```

É retornada uma mensagem com o seguinte objeto no conteúdo JSON no body:

```json
{
    "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
}
```

Caso o nome do convidado ainda não exista, após ser adicionado na lista retorna uma resposta com um objeto **JSON** no body (corpo) onde tem apenas uma propriedade **mensagem** com uma mensagem dizendo que o convidado foi adicionado.

**Exemplo:**

Se for enviada uma requisição **POST** `http://localhost:3000/convidados` com um nome que ainda não exista na lista, conforme a seguir:

```json
{
	"nome": "Gabriel"
}
```

é retornada uma resposta com o seguinte objeto **JSON** no body (corpo) da resposta (response):

```json
{
    "mensagem": "Convidado adicionado."
}
```

**d) Remover um nome da lista de convidados**

Para finalizar, criei a funcionalidade para remover convidados da lista. Para isto, é utilizado o método (verbo) **DELETE** através do endereço `http://localhost:3000/convidados`.

O nome a ser removido é fornecido através de um parâmetro de URL do tipo path (params) chamado **nome**.

O body (corpo) da requisição (request) não deve possuir qualquer conteúdo e se possuir, é ignorado.

Caso não exista um convidado na lista com o nome enviado pela requisição, é retornado uma resposta com objeto json com a propriedade **mensagem** dizendo que não há convidado na lista com aquele nome e que portanto nenhum convidado foi removido.

**Exemplo:**

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao enviar uma requisição **DELETE** `http://localhost:3000/convidados/Fernando`

É retornada uma mensagem com o seguinte objeto no conteúdo JSON no body (corpo):

```json
{
    "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
}
```

Caso exista na lista um convidado com o exato nome enviado pela requisição, a string correspondente é removida do array, e em seguida o servidor retorna uma mensagem com objeto json com a propriedade **mensagem** com uma string informando que o convidado foi removido.

**Exemplo:**

Se for enviada uma requisição **DELETE** `http://localhost:3000/convidados/Juliana`

é retornada uma resposta com o seguinte objeto **JSON** no body (corpo) da resposta (response):

```json
{
    "mensagem": "Convidado removido."
}
```

Após criar todas as funcionalidades, testei todas elas em ordens variadas para verificar se todas estão funcionando como deveriam! =]
