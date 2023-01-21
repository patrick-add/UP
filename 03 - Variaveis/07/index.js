//Casos de COVID-19

const prompt = require('prompt-sync')({ sigint: true });

console.log('----------------------')
console.log('Casos de COVID-19')
console.log('----------------------')

let infectados = prompt('Quantos infectados: '); // 1000;
let trasmitir = 4;
let dias = prompt('Quantidade de dias: '); // 100;
let novosInfectados = infectados * trasmitir ** (dias / 7);

console.log('----------------------')

console.log(`Após ${dias} dias, o total de pessoas infectadas será de ${parseInt(novosInfectados)}, uma vez que inicialmente existiam ${infectados} pessoas infectadas.`);