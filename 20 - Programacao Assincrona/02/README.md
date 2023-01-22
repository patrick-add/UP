
## API Pokemon

Criei uma API para responder informações de pokemons.
Para isso, utilizei como fonte dos dados as funções `listarPokemons` e `detalharPokemon`, da biblioteca `utils-playground`, que pode ser baixada no NPM, e pode ser encontrado no link abaixo:

https://www.npmjs.com/package/utils-playground

Deste modo, o fluxo é:

1. O usuário vai chamar a API
2. Minha API vai chamar as funções e aguardar o retorno delas
3. API vai retornar os dados que forem pedidos abaixo para o usuário

Todas as requisições são assíncronas **aguarda o retorno de cada chamada (quando necessário)**, antes de executar qualquer outro comando.

Criei apenas dois métodos (verbos **HTTP**) para o mesmo recurso **pokemon** (`http://localhost:8000/pokemon`):

-   **GET** para listar os pokemons
-   **GET** com id ou nome para retornar informações de 1 pokemon

Abaixo detalhei como cada um dos métodos funciona:

**A) GET sem parâmetro de rota**

Como a quantidade existente de pokemons é bem grande é necessário trabalhar com paginação dos dados.

A função `listarPokemons` que utilizei já é preparada para a paginação, sendo possível informar um argumento com a página desejada. Cada página retorna 10 pokemons e caso a página não seja informada como argumento da função, é retornada a primeira página.

**Exemplo:**

```javascript
const pokemons = listarPokemons()
// aqui será listado os 10 pokemons da primeira página.

const pokemons = listarPokemons(3)
// aqui será listado os 10 pokemons da terceira página.
```

**IMPORTANTE:**

Perceba que é retornada a informação sobre a página além dos objetos dos pokemons que estão na propriedade **results**.

Na minha API quero retornar apenas os objetos dos pokemons, portanto retorna apenas o array que está em **results** do retorno da função.

**B) GET com parâmetro de rota (id ou nome)**

Criei um novo método em nova rota **GET** que recebe um parâmetro do tipo path (params) que pode ser o **id** ou o **nome (em inglês)** do pokemon.

A função `detalharPokemon` já é preparada para receber um argumento com id ou nome nos seguintes formatos:

```javascript
const pokemons = detalharPokemon(1)
// aqui será detalhado as informações do bulbasaur.

const pokemons = detalharPokemon("bulbasaur")
// aqui será detalhado as informações do bulbasaur.
```

O objeto retornado pela função `detalharPokemon` é bastaaaaanteee grandeeee!!!
E eu não preciso de todas as propriedades. Portanto, selecionei algumas propriedades do pokemon retornado pela função para repassar aos consumidores da minha api.

As propriedades selecionadas é:

-   id
-   name
-   height
-   weight
-   base_experience
-   forms
-   abilities
-   species

Sendo assim, como exemplo, ao requisitar `http://localhost:8000/pokemon/1/` ou `http://localhost:8000/pokemon/bulbasaur/` na API, é retornado:

```json
{
    "id": 1,
    "name": "bulbasaur",
    "height": 7,
    "weight": 69,
    "base_experience": 64,
    "forms": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
        }
    ],
    "abilities": [
        {
            "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "species": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    }
}
```
