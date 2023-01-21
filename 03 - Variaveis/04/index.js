//Calcular juros compostos

const prompt = require('prompt-sync')({ sigint: true });

console.log('-----------------------------')
console.log('Calculadora juros compostos')
console.log('-----------------------------')

let capital = prompt('Capital inicial: '); //1000 C
let taxa = prompt('Taxa: '); //12.5 i
let tempo = prompt('Tempo: '); //5 t
let montante = capital * (1 + taxa / 100) ** tempo //M

console.log('-----------------------------')

console.log(`O valor do montante final será: R$${montante.toFixed(2)}.`)