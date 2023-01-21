//Calculadora de IMC

const prompt = require('prompt-sync')({ sigint: true });
// sigint(sinal) -> ele sem nada é true.

console.log('--------------------')
console.log('Calculadora de IMC')
console.log('--------------------')

let peso = prompt('Qual seu peso: '); //76
let altura = prompt('Qual sua altura: '); //1.79
let imc = peso / altura ** 2;

console.log('--------------------')
console.log(`O seu IMC é: ${imc.toFixed(2)}`);



