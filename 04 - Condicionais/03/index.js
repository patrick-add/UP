const ladoA = 3;
const ladoB = 3;

if (ladoA < 0 || ladoA > 6 || ladoB < 0 || ladoB > 6) {
    console.log('Número da peça inválido.')
} else if (ladoA === ladoB) {
    console.log('SIM!')
} else {
    console.log('NÃO!')
}