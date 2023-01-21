
## Calculadora Online

Porta: 3000 (http://localhost:3000)

Criei um servidor com 4 rotas _GET_ para executar 4 operações básicas da matemática (somar, subtrair, multiplicar, dividir)

```javascript
/somar
/subtrair
/multiplicar
/dividir
```

Todas as rotas esperam dois parâmetros query **num1** e **num2** e retorna a resposta da operação.

### Exemplos de requisições e respostas:

_Para a requisição na rota `/somar` utilizando `num1=10` e `num2=5`  retorna `15`_

Requisição

```javascript
/somar?num1=10&num2=5
```

Resposta

```javascript
15
```

_Para a requisição na rota `/subtrair` utilizando `num1=10` e `num2=5` retorna `5`_

Requisição

```javascript
/subtrair?num1=10&num2=5
```

Resposta

```javascript
5
```

_Para a requisição na rota `/multiplicar` utilizando `num1=10` e `num2=5` retorna `50`_

Requisição

```javascript
/subtrair?num1=10&num2=5
```

Resposta

```javascript
50
```

_Para a requisição na rota `/dividir` utilizando `num1=10` e `num2=5` retorna `2`_

Requisição

```javascript
/subtrair?num1=10&num2=5
```

Resposta

```javascript
2
```
