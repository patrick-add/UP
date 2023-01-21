const validacaoSenha = (req, res, next) => {
    const { senha } = req.query

    if (!senha || senha !== 'cubos123') {
        return res.status(401).json({ mensagem: 'Senha incorreta.' })
    }

    next()
}

module.exports = {
    validacaoSenha
}
