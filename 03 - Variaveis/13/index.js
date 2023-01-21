// Área total de um cilindro

const prompt = require('prompt-sync')({ sigint: true });

console.log('--------------------------')
console.log('Área total de um cilindro')
console.log('--------------------------')

let raio = Number(prompt('Raio da base: ')); //3
let alturaCilindro = Number(prompt('Altura do cilindro: ')); //1
let areaTotalCilindro = (Math.PI * 2 * raio) * (raio + alturaCilindro);

console.log('--------------------------')

console.log(`A área total do cilindro: ${parseInt(areaTotalCilindro)}pi.`);