
## Cálculo de frete

Criei uma API para cálcular o frete de um produto.

A minha API possui três rotas e todas utilizam o método **GET**.

A rota **GET** `/produtos` faz a listagem dos produtos que estão listados no arquivo `produtos.js`, na pasta `bancodedados`.

A rota **GET** `/produtos/:idProduto` faz o detalhamento de um produto através do `id`, passado como parâmetro na rota.

A rota **GET** `/produtos/:idProduto/frete/:cep` recebe dois parâmetros de rota. O primeiro `idProduto` recebe o id do produto que é calculado o frete, e o segundo `cep` recebe o cep (sem pontuação) para que seja encontrado o estado referente ao cep informado.

Esta rota calcula o frete do produto de acordo com as regras abaixo.

Para encontrar o estado através do cep informado, usei a função `getStateFromZipcode`, da biblioteca `utils-playground`, que pode ser baixada no **NPM**, e pode ser encontrado no link abaixo:

https://www.npmjs.com/package/utils-playground


**Regras para cálculo de frete**

-   O valor padrão do frete é de `12%` do valor do produto
-   Para os estados `BA, SE, AL, PE e PB` o valor do frete é de `10%`
-   Para os estados `SP e RJ` o valor do frete é de `15%`

**Exemplo:**

Caso chamado a rota **GET** `/produtos/1/frete/41256250`, a resposta é:

```json
{
    "produto": {
        "id": 1,
        "nome": "Teclado mecânico Keychron K2",
        "valor": 100000
    },
    "estado": "BA",
    "frete": 10000
}
```