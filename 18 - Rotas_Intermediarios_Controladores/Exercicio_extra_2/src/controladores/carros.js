const carros = require('../bancoDeDados')

const listagemCarros = (req, res) => {
    const { marca, cor } = req.query
    let filtrando = carros

    if (marca) {
        filtrando = filtrando.filter((carro) => {
            return carro.marca === marca
        })
    }

    if (cor) {
        filtrando = filtrando.filter((carro) => {
            return carro.cor === cor
        })
    }

    res.send(filtrando)
}

const encontrandoCarro = (req, res) => {
    const carroDesejado = carros.find((carro) => {
        return carro.id === Number(req.params.idCarro)
    })

    if (carroDesejado) {
        res.send(carroDesejado)
    } else {
        res.send('Carro não encontrado.')
    }
}

module.exports = {
    listagemCarros,
    encontrandoCarro
}