//Taxa de Juros

const prompt = require('prompt-sync')({ sigint: true });

console.log('----------------------------')
console.log('Taxa de Juros Financiamento')
console.log('----------------------------')

let montante = prompt('Qual o montante: '); //90000
let capitalInicial = prompt('Capital Inicial: '); //60000
let meses = prompt('Meses: '); //24
let taxa = ((montante / capitalInicial) ** (1 / meses) - 1) * 100;

console.log('----------------------------')

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxa.toFixed(4)}%, pois após ${meses} meses você teve que pagar ${montante} reais.`)