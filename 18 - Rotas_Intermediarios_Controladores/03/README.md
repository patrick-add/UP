
## Consulta de imóveis

Criei um servidor para consulta de imóveis pré cadastrados. Este servidor é feito em nodejs e é acessado através do endereço `http://localhost:8000`. A lista pré cadastrada de imóveis no servidor é um array de objetos onde cada objeto representa um imóvel e possui propriedades que definem o imóvel conforme exemplo abaixo:

```javascript
const imoveis = [
    {
        id: 1,
        logradouro: "Av. Getúlio Vargas",
        numero: 1458,
        complemento: "Térreo",
        bairro: "Funcionários",
        cidade: "Belo Horizonte",
        cep: "30112-021",
    },
    {
        id: 2,
        logradouro: "Av. Paulista",
        numero: 1009,
        complemento: "16º andar",
        bairro: "Cerqueira César",
        cidade: "São Paulo",
        cep: "01310-100",
    },
]
```

Este servidor possui apenas um recurso **imoveis** e apenas duas rotas que utiliza o verbo **HTTP GET**. Segue abaixo as rotas:
```
/imoveis
/imoveis/{id}
```

Para a requisição **HTTP GET** na rota `http://localhost:8000/imoveis` é retornada a lista completa de imóveis, como no exemplo abaixo:

```json
[
    {
        "id": 1,
        "logradouro": "Av. Getúlio Vargas",
        "numero": 1458,
        "complemento": "Térreo",
        "bairro": "Funcionários",
        "cidade": "Belo Horizonte",
        "cep": "30112-021"
    },
    {
        "id": 2,
        "logradouro": "Av. Paulista",
        "numero": 1009,
        "complemento": "16º andar",
        "bairro": "Cerqueira César",
        "cidade": "São Paulo",
        "cep": "01310-100"
    }
]
```

A outra rota recebe um parâmetro na URL que é o **ID** do imóvel a ser consultado e retorna apenas 1 objeto, que é o objeto correspondente ao **ID** passado como parâmetro na URL.

Portanto para a requisição **HTTP GET** na rota `http://localhost:8000/imoveis/2` é retornado apenas o objeto referente ao ID passado, como no exemplo abaixo:

```json
{
    "id": 2,
    "logradouro": "Av. Paulista",
    "numero": 1009,
    "complemento": "16º andar",
    "bairro": "Cerqueira César",
    "cidade": "São Paulo",
    "cep": "01310-100"
}
```

O servidor é separado em camadas, de forma que cada um dos componentes (inicialização dos servidor, rotas, controladores e dados) fica em arquivos e pastas diferentes.

**a) API em único arquivo**

Inicializei uma aplicação (pacote) nodejs e instalei os pacotes necessários para criar um servidor.

Além disso, criei o servidor em um único arquivo, para isso, precisei ter o arquivo **index.js**, onde toda a execução do servidor acontece (importação dos pacotes necessários, construção da aplicação, definição do array de imoveis e definição dos métodos que atende as rotas mencionadas antes).

**b) Camada de dados**

Após o servidor estar funcionando em único arquivo, realizarei a separação da camada de dados. Para isso criei um diretório chamado **dados** no mesmo nível do arquivo **index.js** e dentro do novo diretório criei um arquivo chamado **imoveis.js** onde está a definição de uma constante **imoveis** que possui como valor o array de imóveis que antes existia no arquivo principal do servidor.

Já no arquivo principal **index.js** removi a definição do array **imoveis** que antes ali existia, e importei o arquivo **imoveis.js** que criei no diretório **dados** para dentro de uma constante chamada **imoveis**.

Feito isso separei a camada de dados e a API se manteve funcionando normalmente como estava antes.

**c) Controladores**

A camada de controladores. Para isso criei um diretório chamado **controladores** no mesmo nível do arquivo principal **index.js** e dentro deste novo diretório criei um arquivo **imoveis.js**.

Neste novo arquivo **imoveis.js** importei o array do arquivo **imoveis.js** do diretório de dados para dentro de uma constante **imoveis**.

Após a importação dos dados, criei dois métodos **get** e **getPorId** (ambos recebendo dois parâmetros **req** e **res**), que possui as lógicas que antes estavam no arquivo principal **index.js** para, responder a lista completa (array inteiro) de imóveis e para responder um único objeto de imóvel correspondente ao ID recebido na requisição, respectivamente.

Para utilizar os novos controladores, importei o arquivo **imoveis.js** do diretório **controladores** no arquivo principal **index.js** do servidor (neste ponto utilizei a desestruturação para definir duas variáveis diferentes para cada um dos métodos de controladores que é importado).

Após importar os métodos em variáveis, passei essas variáveis que guardam as funções como parâmetros para os métodos que configuram as duas rotas **GET**, substituindo as funções que ali estavam, implementando as lógicas para cada uma das rotas.


**d) Roteadores**

Para finalizar meu servidor dividido em camadas, separei a configuração das rotas. Para isso, criei um arquivo **roteador.js** no mesmo nível do arquivo principal **index.js**.

Neste novo arquivo, precisei realizar as importações necessárias e em seguida colocar os comandos que configuram as duas rotas que meu servidor possui.

No final do arquivo, exportei meu roteador.

Já no arquivo principal **index.js**, para que meu roteador possa ser utilizado, importei e em seguida usei.

**Obs.:** Note que no arquivo principal, após criar, importar e utilizar o roteador, não precisei mais ter a importação dos controladores, que pude apagar.

--

Para finalizar, após fazer todas as divisões de camadas, testei os métodos verificando se eles estão nas rotas corretas, recebendo os parâmetros corretos (quando for o caso) e respondendo o que deve ser respondido.