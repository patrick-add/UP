//Calcular a distância entre dois pontos

const prompt = require('prompt-sync')({ sigint: true });

console.log('----------------------------------------------')
console.log('Calculadora de distância entre dois pontos: ')
console.log('----------------------------------------------')

let pontoX1 = prompt('X1:'); //1
let pontoX2 = prompt('X2:'); //1
let pontoY1 = prompt('Y1:'); //1
let pontoY2 = prompt('Y2:'); //2
let distancia = Math.sqrt((pontoX2 - pontoX1) ** 2 + (pontoY2 - pontoY1) ** 2)

console.log('----------------------------------------------')

console.log(`A distância entre esses 2 pontos é: ${distancia.toFixed(2)}.`)




