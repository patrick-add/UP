
## Consulta CEP

Criei uma API para consulta de endereços pelo CEP.

Para fonte dos dados, utilizei a função `buscarEndereco`, da biblioteca `utils-playground`, que pode ser baixada no **NPM**, e pode ser encontrado no link abaixo:

https://www.npmjs.com/package/utils-playground

A minha API possui apenas um recurso **enderecos** com apenas um método **GET** que recebe como parâmetro tipo path (params) **cep** que é o número do CEP (sem pontuação, apenas números).
A requisição**GET** da minha API é realizada através do endereço `http://localhost:3000/enderecos/`

Ao receber a requisição, minha API primeiro procura o endereço em um array de endereços do arquivo **enderecos.json** que existi em meu servidor e caso não encontre, requisitar o endereço usando a função `buscarEndereco`.

Para consultar o endereço usando a função `buscarEndereco`, deve passar o número do CEP sem pontuação da seguinte forma:

```javascript
const endereco = buscarEndereco("12345678")
```

Quando encontrar o endereço, deve incluir o objeto do endereço retornado pela função no array de endereços do arquivo **enderecos.json**. Ou seja, conforme faz mais chamadas, o arquivo vai acumulando mais endereços. Cuidei para que não tenha endereços duplicados nos arquivos.

Para ler e escrever no arquivo utilizei o pacote **fs** com chamadas assíncronas.

O objeto do endereço que trabalhei tem o seguinte formato:

```json
{
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
}
```
