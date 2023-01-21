//Fahrenheit x Celsius

const prompt = require('prompt-sync')({ sigint: true });

console.log('----------------------')
console.log('Fahrenheit x Celsius')
console.log('----------------------')

let f = prompt('Quantos graus em Fahrenheit são: '); //73
let c = (f - 32) * (5 / 9);

console.log('----------------------')

console.log(`De acordo com o valor informado, agora está ${f} ºF na sua cidade, se converter isso para Celsius, na sua cidade agora está ${c.toFixed(2)}ºC `)

