let { identificadorAula, aulas, instrutores } = require('../bancodedados')

const adicionarAula = (req, res) => {
    const { id } = req.params
    const { titulo, descricao } = req.body

    let instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não existe.' })
    }

    if (!titulo) {
        return res.status(400).json({ mensagem: 'Informe um titulo.' })
    }

    if (!descricao) {
        return res.status(400).json({ mensagem: 'Informe a descrição.' })
    }

    const novaAula = {
        id: identificadorAula++,
        idInstrutor: Number(id),
        titulo,
        descricao
    }

    aulas.push(novaAula)

    return res.status(201).json(novaAula)

}

const listarAulas = (req, res) => {

    return res.status(200).json(aulas)
}

const encontrarAula = (req, res) => {
    const { idAula } = req.params

    const aula = aulas.find((aula) => {
        return aula.id === Number(idAula)
    })

    if (!aula) {
        return res.status(404).json({ mensagem: "Aula não existe." })
    }

    return res.status(200).json(aula)
}

const mostrarAulasDoInstrutor = (req, res) => {
    const { id } = req.params

    const instrutor = aulas.find((aula) => {
        return aula.idInstrutor === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: "Instrutor não existe." })
    }

    const aulasInstrutos = aulas.filter((aula) => {
        return aula.idInstrutor === instrutor.id
    })

    return res.status(200).json(aulasInstrutos)

}

module.exports = {
    adicionarAula,
    listarAulas,
    encontrarAula,
    mostrarAulasDoInstrutor
}