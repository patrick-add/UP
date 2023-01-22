const { differenceInHours } = require('date-fns');

const promocao = (horarioPromocao, chegadaDoCliente) => {
    const diferenca = differenceInHours(chegadaDoCliente, horarioPromocao)
    if (diferenca < 0 || diferenca > 24) {
        return false
    }
    return true
}

console.log(promocao(new Date(2020, 0, 4, 14), new Date(2020, 0, 4, 18)));