//Velocidade média

const prompt = require('prompt-sync')({ sigint: true });

console.log('----------------------')
console.log('Velocidade média')
console.log('----------------------')

let distPercorrida = prompt('Quantos metros: '); //500 metros
let tempo = prompt('Em quanto tempo: '); //10 segundos
let velocidade = distPercorrida / tempo * 3.6;

console.log('----------------------')

console.log(`A sua velocidade média é: ${velocidade.toFixed(1)}km/h.`)
