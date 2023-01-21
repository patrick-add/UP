const verificador = (req, res, next) => {
    const { num1, num2 } = req.query
    if (!num1 || !num2) {
        return res.send('Operação inválida, digite os dois valores corretamente.')
    }
    next()
}

module.exports = {
    verificador
}