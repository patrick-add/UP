//Desconto do tênis

const prompt = require('prompt-sync')({ sigint: true });

console.log('----------------------')
console.log('Desconto do tênis')
console.log('----------------------')

/*let tenis = 129.99;
let dinheiro = 80;
let desconto = ((tenis - dinheiro) / tenis) * 100;*/

let tenis = prompt('Qual o valor do tênis: '); //129.99
let sobra = prompt('Eu tenho: '); //80
let dinheiro = sobra * 100 / tenis;
let desconto = 100 - dinheiro;

console.log('----------------------')

console.log(`Eu preciso de ${desconto.toFixed(2)} % de desconto.`);