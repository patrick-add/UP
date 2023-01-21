let { livros, identificador } = require('../db/dados')

const listarLivros = (req, res) => {
    return res.status(200).json(livros)
}
const encontrandoLivro = (req, res) => {
    const { id } = req.params

    if (isNaN(Number(id)) || Number(id) < 0) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!livro) {
        return res.status(400).json({ mensagem: "Não existe livro para o ID informado." })
    }

    return res.status(200).json(livro)
}
const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo.trim()) {
        return res.status(400).json({ mensagem: "Não foi informado o titulo" })
    }
    if (!autor.trim()) {
        return res.status(400).json({ mensagem: "Não foi informado o autor" })
    }
    if (!ano.trim()) {
        return res.status(400).json({ mensagem: "Não foi informado o ano" })
    }
    if (!numPaginas || numPaginas < 0 || isNaN(numPaginas)) {
        return res.status(400).json({ mensagem: "Número de páginas inválido" })
    }

    const novoLivro = {
        id: identificador++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(novoLivro)

    return res.status(201).json(novoLivro)
}
const substituirLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body
    const { id } = req.params

    if (isNaN(Number(id)) || Number(id) < 0) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    let livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!livro) {
        return res.status(400).json({ mensagem: "Não existe livro a ser substituído para o ID informado." })
    }

    if (!titulo.trim()) {
        return res.status(400).json({ mensagem: "Não foi informado o titulo" })
    }
    if (!autor.trim()) {
        return res.status(400).json({ mensagem: "Não foi informado o autor" })
    }
    if (!ano.trim()) {
        return res.status(400).json({ mensagem: "Não foi informado o ano" })
    }
    if (!numPaginas || numPaginas < 0 || isNaN(numPaginas)) {
        return res.status(400).json({ mensagem: "Número de páginas inválido" })
    }

    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano
    livro.numPaginas = numPaginas

    return res.status(200).json({ mensagem: "Livro substituído." })

}
const alterarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body
    const { id } = req.params

    if (isNaN(Number(id)) || Number(id) < 0) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    let livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!livro) {
        return res.status(400).json({ mensagem: "Não existe livro a ser alterado para o ID informado." })
    }

    if (titulo) {
        livro.titulo = titulo
    }
    if (autor) {
        livro.autor = autor
    }
    if (ano) {
        livro.ano = ano
    }
    if (numPaginas) {
        livro.numPaginas = numPaginas
    }

    return res.status(200).json({ mensagem: "Livro alterado." })

}
const removerLivro = (req, res) => {
    const { id } = req.params

    if (isNaN(Number(id)) || Number(id) < 0) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    let livro = livros.findIndex((livro) => {
        return livro.id === Number(id)
    })

    if (livro === -1) {
        return res.status(400).json({ mensagem: "Não existe livro a ser removido para o ID informado." })
    }

    livros.splice(livro, 1)

    return res.status(200).json({ mensagem: "Livro removido." })
}

module.exports = {
    listarLivros,
    encontrandoLivro,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    removerLivro
}