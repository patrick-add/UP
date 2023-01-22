
## Tá aberto?

Uma determinada loja funciona das 8h00 (já aberto) às 18h (ainda aberto, fechado as 18h01). Fiz uma função que recebe como argumento um objeto Date do JS, representando o momento em que o cliente chega na loja. A função retorna `true` caso a loja esteja aberta e `false` caso a loja esteja fechada.

Considerei o fuso UTC para tudo.

```
taAberto(newDate(2015,1,1,12)); // deve retornar true

taAberto(newDate(2015,1,1,2)); // deve retornar false
```
