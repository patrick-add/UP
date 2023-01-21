let { alunos, identificador } = require('../dados/bancodedados')
let cursos = require('../dados/cursos')

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos)
}

const encontrarAluno = (req, res) => {

    const { id } = req.params
    const numeroId = Number(id)

    if (numeroId < 0 || isNaN(numeroId)) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })

    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não foi encontrado.' })
    }

    return res.status(200).json(aluno)

}

const adicionarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome.trim()) {
        return res.status(400).json({ mensagem: 'Não foi digitado o nome.' })
    }
    if (!sobrenome.trim()) {
        return res.status(400).json({ mensagem: 'Não foi digitado o sobrenome.' })
    }
    if (!idade || idade < 18) {
        return res.status(400).json({ mensagem: 'Idade inválida.' })
    }
    if (!curso.trim()) {
        return res.status(400).json({ mensagem: 'Não foi digitado o curso.' })
    }
    if (!cursos.includes(curso)) {
        return res.status(400).json({ mensagem: 'Curso digitado não existe.' })
    }

    const novoAluno = {
        id: identificador++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(novoAluno)

    return res.status(201).json(novoAluno)
}

const deletarAluno = (req, res) => {
    const { id } = req.params
    const numeroId = Number(id)

    if (numeroId < 0 || isNaN(numeroId)) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })

    }

    const aluno = alunos.findIndex((aluno) => {
        return aluno.id === Number(id)
    })

    if (aluno === -1) {
        return res.status(404).json({ mensagem: 'Aluno a ser excluído não foi encontrado.' })
    }

    const excluido = alunos.splice(aluno, 1)


    return res.status(200).json(excluido)
}

const atualizandoFichaDoAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body
    const { id } = req.params
    const numeroId = Number(id)

    if (numeroId < 0 || isNaN(numeroId)) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })
    }

    let aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não foi encontrado.' })
    }

    if (!nome.trim()) {
        return res.status(400).json({ mensagem: 'Não foi digitado o nome.' })
    }
    if (!sobrenome.trim()) {
        return res.status(400).json({ mensagem: 'Não foi digitado o sobrenome.' })
    }
    if (!idade || idade < 18) {
        return res.status(400).json({ mensagem: 'Idade inválida.' })
    }
    if (!curso.trim()) {
        return res.status(400).json({ mensagem: 'Não foi digitado o curso.' })
    }
    if (!cursos.includes(curso)) {
        return res.status(400).json({ mensagem: 'Curso digitado não existe.' })
    }

    aluno.nome = nome
    aluno.sobrenome = sobrenome
    aluno.idade = idade
    aluno.curso = curso

    return res.status(204).send()
}

const atualizandoDadoDoAluno = (req, res) => {
    const { curso } = req.body
    const { id } = req.params
    const numeroId = Number(id)

    if (numeroId < 0 || isNaN(numeroId)) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })
    }

    let aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não foi encontrado.' })
    }

    if (!curso.trim()) {
        return res.status(400).json({ mensagem: 'Não foi digitado o curso.' })
    }
    if (!cursos.includes(curso)) {
        return res.status(400).json({ mensagem: 'Curso digitado não existe.' })
    }

    aluno.curso = curso

    return res.status(204).send()
}

module.exports = {
    listarAlunos,
    encontrarAluno,
    adicionarAluno,
    deletarAluno,
    atualizandoDadoDoAluno,
    atualizandoFichaDoAluno
}