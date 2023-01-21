//Volume de uma esfera

const prompt = require('prompt-sync')({ sigint: true });

console.log('----------------------')
console.log('Volume de uma esfera')
console.log('----------------------')

//FORMULA ENUNCIADO
let diametro = prompt('Qual o diâmetro: '); //6
let raio = diametro / 2;
let volumeEsfera = 4 / 3 * raio ** 3;

console.log('----------------------')

console.log(`O volume de uma esfera de raio ${raio} é ${volumeEsfera.toFixed(1)} PI.`);

//FORMULA QUE ENCONTREI NA PESQUISA.
let rai = diametro / 2; //3
let volEsfera = 4 / 3 * Math.PI * rai ** 3;

console.log(`O volume de uma esfera de raio ${rai} é ${volEsfera.toFixed(1)} metros³.`);