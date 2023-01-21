const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3_000_000; //emCentavos

const RealParaCentavo = 28559.70 * 100

if (aposentada || portadoraDeDoenca) {
    console.log('ISENTA.')
} else if (totalDeRendimentos <= RealParaCentavo) {
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE.')
} else {
    console.log('PEGA LEAO.')
}