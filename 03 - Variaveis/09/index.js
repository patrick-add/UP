//Soma dos ângulos internos de um polígono

const prompt = require('prompt-sync')({ sigint: true });

console.log('------------------------------------------')
console.log('Soma dos ângulos internos de um polígono')
console.log('------------------------------------------')

let nlados = prompt('Quantos lados tem o polígono: '); //6
let soma = (nlados - 2) * 180;
let angulos = soma / nlados;

console.log('------------------------------------------')

console.log(`A soma dos ângulos internos é ${soma}° e o valor de cada ângulo do polígono é ${angulos}°.`)