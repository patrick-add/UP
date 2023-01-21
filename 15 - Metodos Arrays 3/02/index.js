const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const maiorString = cidades.reduce((resultado, elementoAtual) => {
    if (elementoAtual.length > resultado.length) {
        resultado = elementoAtual
    }
    return resultado
})

console.log(maiorString);