const numeroCartao = '1111222233334444';

const primeiraParte = numeroCartao.slice(0, 4)
const segundaParte = numeroCartao.slice(-4).padStart(12, "*")

console.log(primeiraParte + segundaParte)