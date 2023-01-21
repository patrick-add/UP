const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maiorNumero = numeros.reduce((resultado, elementoAtual) => {
    return elementoAtual > resultado ? elementoAtual : resultado
})

console.log(maiorNumero);