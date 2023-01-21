const validarSenha = (req, res, next) => {
    const { senha } = req.query

    if (!senha) {
        return res.send('Senha não informada.')
    }

    if (senha !== 'carros123') {
        return res.send('Senha Inválida.')
    }
    next()
}

module.exports = {
    validarSenha
}