const convidados = require("../db/dados")

const listarConvidados = (req, res) => {
    const { nome } = req.query

    if (nome) {
        if (convidados.includes(nome)) {
            return res.status(200).json({ mensagem: "Convidado presente." })
        }
        return res.status(404).json({ mensagem: "O convidado buscado não está presente na lista." })
    }
    return res.status(200).json(convidados)
}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body

    if (!nome.trim()) {
        return res.status(400).json({ mensagem: "Nenhum nome informado. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    }

    if (convidados.includes(nome)) {
        return res.status(400).json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    }

    convidados.push(nome)

    return res.status(201).json({ mensagem: "Convidado adicionado." })

}

const excluirConvidado = (req, res) => {
    const { nome } = req.params

    if (!convidados.includes(nome)) {
        return res.status(404).json({ mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })
    }

    const indice = convidados.indexOf(nome)
    convidados.splice(indice, 1)

    return res.status(200).json({ mensagem: "Convidado removido." })
}

module.exports = {
    listarConvidados,
    adicionarConvidado,
    excluirConvidado
}