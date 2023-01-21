//Calculo do perímetro e área de um círculo

const prompt = require('prompt-sync')({ sigint: true });

console.log('-------------------------------------------')
console.log('Calculo do perímetro e área de um círculo')
console.log('-------------------------------------------')

let raio = prompt('Raio: '); // 1
let comprimeto = Math.PI * 2 * raio;
let area = Math.PI * raio ** 2;

console.log('-------------------------------------------')

console.log(`O comprimento é ${comprimeto.toFixed(1)} e a área é ${area.toFixed(2)}m² deste círculo.`);