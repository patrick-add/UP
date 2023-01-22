const { differenceInDays } = require('date-fns');

const promocao = (horarioPromocao, chegadaDoCliente) => {
    const diferenca = differenceInDays(chegadaDoCliente, horarioPromocao)

    if (diferenca < 0 || diferenca > 30) {
        return false
    }
    return true
}

console.log(promocao(new Date(2020, 0, 4), new Date(2020, 1, 3)));