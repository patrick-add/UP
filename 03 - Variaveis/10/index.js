//Delta

const prompt = require('prompt-sync')({ sigint: true });

console.log('----------------------')
console.log('Delta')
console.log('----------------------')

let a = prompt('Coeficiente A: '); //5
let b = prompt('Coeficiente B: '); //5
let c = prompt('Coeficiente C: '); //1

let delta = b ** 2 - 4 * a * c;

console.log('----------------------')

console.log(`O valor de delta a partir desses coeficientes é: ${delta}.`)