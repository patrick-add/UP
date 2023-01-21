const somar = (req, res) => {
    let { num1, num2 } = req.query
    let resultado = Number(num1) + Number(num2)

    res.send(resultado.toString())
}

const subtrair = (req, res) => {
    let { num1, num2 } = req.query
    let resultado = Number(num1) - Number(num2)

    res.send(resultado.toString())
}

const multiplicar = (req, res) => {
    let { num1, num2 } = req.query
    let resultado = Number(num1) * Number(num2)

    res.send(resultado.toString())
}

const dividir = (req, res) => {
    let { num1, num2 } = req.query
    let resultado = Number(num1) / Number(num2)

    res.send(resultado.toString())
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}